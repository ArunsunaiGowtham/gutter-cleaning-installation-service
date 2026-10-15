/**
 * ApexGutter - Interactive Gutter Estimate Pricing Calculator
 */
(function() {
  function initCalculator() {
    const calcForm = document.getElementById('gutterEstimatorForm');
    if (!calcForm) return;

    const serviceSelect = document.getElementById('calcService');
    const storiesSelect = document.getElementById('calcStories');
    const footageInput = document.getElementById('calcFootage');
    const footageValDisplay = document.getElementById('calcFootageVal');
    const resultRange = document.getElementById('calcResultRange');
    const breakdownList = document.getElementById('calcBreakdown');
    const lockEstimateBtn = document.getElementById('lockEstimateBtn');

    // Addons
    const addonDownspouts = document.getElementById('addonDownspouts');
    const addonDripEdge = document.getElementById('addonDripEdge');
    const addonOversized = document.getElementById('addonOversized');
    const addonPlan = document.getElementById('addonPlan');

    function calculate() {
      const service = serviceSelect ? serviceSelect.value : 'cleaning';
      const storiesMultiplier = storiesSelect ? parseFloat(storiesSelect.value) : 1.0;
      const footage = footageInput ? parseInt(footageInput.value, 10) : 150;

      if (footageValDisplay) {
        footageValDisplay.textContent = footage + ' ft';
      }

      let baseMinPerFt = 0;
      let baseMaxPerFt = 0;
      let flatMin = 0;
      let flatMax = 0;
      let serviceName = "Gutter Cleaning";

      switch (service) {
        case 'cleaning':
          serviceName = "Residential Gutter Cleaning & Flush";
          baseMinPerFt = 0.90;
          baseMaxPerFt = 1.35;
          flatMin = 75; // minimum callout base
          flatMax = 95;
          break;
        case 'seamless-aluminum':
          serviceName = "Seamless .032 Aluminum Installation";
          baseMinPerFt = 8.50;
          baseMaxPerFt = 12.50;
          flatMin = 150;
          flatMax = 200;
          break;
        case 'seamless-copper':
          serviceName = "Architectural 16oz Copper Installation";
          baseMinPerFt = 24.00;
          baseMaxPerFt = 36.00;
          flatMin = 350;
          flatMax = 500;
          break;
        case 'guards':
          serviceName = "Micro-Mesh Stainless Steel Guards";
          baseMinPerFt = 7.50;
          baseMaxPerFt = 11.50;
          flatMin = 100;
          flatMax = 150;
          break;
        case 'replacement':
          serviceName = "Full Old Gutter Tear-off & New Seamless System";
          baseMinPerFt = 11.00;
          baseMaxPerFt = 16.50;
          flatMin = 250;
          flatMax = 350;
          break;
        case 'repair':
          serviceName = "Gutter Repair, Re-Pitching & Joint Resealing";
          baseMinPerFt = 1.80;
          baseMaxPerFt = 3.20;
          flatMin = 95;
          flatMax = 150;
          break;
      }

      let totalMin = (flatMin + (footage * baseMinPerFt)) * storiesMultiplier;
      let totalMax = (flatMax + (footage * baseMaxPerFt)) * storiesMultiplier;

      // Add-ons
      const breakdownItems = [];
      breakdownItems.push(`<li><strong>${serviceName}:</strong> ~${footage} linear feet across roofline</li>`);
      breakdownItems.push(`<li><strong>Height/Access Adjustment:</strong> ${storiesSelect.options[storiesSelect.selectedIndex].text}</li>`);

      if (addonDownspouts && addonDownspouts.checked) {
        totalMin += 65;
        totalMax += 85;
        breakdownItems.push(`<li><strong>Downspout Jetting:</strong> +$65 - $85</li>`);
      }
      if (addonDripEdge && addonDripEdge.checked) {
        totalMin += 95;
        totalMax += 135;
        breakdownItems.push(`<li><strong>Fascia Seal & Drip Edge Flashing:</strong> +$95 - $135</li>`);
      }
      if (addonOversized && addonOversized.checked) {
        const extraMin = footage * 2.20;
        const extraMax = footage * 3.10;
        totalMin += extraMin;
        totalMax += extraMax;
        breakdownItems.push(`<li><strong>High-Capacity 6-Inch Gutter Upgrade:</strong> +$${Math.round(extraMin)} - $${Math.round(extraMax)}</li>`);
      }
      if (addonPlan && addonPlan.checked) {
        totalMin += 180;
        totalMax += 220;
        breakdownItems.push(`<li><strong>Annual Seasonal Maintenance Plan:</strong> +$180 - $220/yr</li>`);
      }

      const roundedMin = Math.round(totalMin / 5) * 5;
      const roundedMax = Math.round(totalMax / 5) * 5;

      if (resultRange) {
        resultRange.textContent = `$${roundedMin} - $${roundedMax}`;
      }

      if (breakdownList) {
        breakdownList.innerHTML = breakdownItems.join('');
      }

      // Update button data attribute
      if (lockEstimateBtn) {
        lockEstimateBtn.setAttribute('data-estimate-service', serviceName);
        lockEstimateBtn.setAttribute('data-estimate-range', `$${roundedMin} - $${roundedMax}`);
        lockEstimateBtn.setAttribute('data-estimate-footage', `${footage} ft`);
      }
    }

    // Attach listeners
    [serviceSelect, storiesSelect, footageInput, addonDownspouts, addonDripEdge, addonOversized, addonPlan].forEach(el => {
      if (el) {
        el.addEventListener('input', calculate);
        el.addEventListener('change', calculate);
      }
    });

    if (lockEstimateBtn) {
      lockEstimateBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const serviceName = this.getAttribute('data-estimate-service') || 'Gutter Service';
        const range = this.getAttribute('data-estimate-range') || '$150 - $250';
        const footage = this.getAttribute('data-estimate-footage') || '150 ft';

        // Check if estimate modal exists
        const modalEl = document.getElementById('estimateModal');
        if (modalEl && typeof bootstrap !== 'undefined') {
          const serviceInput = modalEl.querySelector('#modalServiceType');
          const messageInput = modalEl.querySelector('#modalMessage');
          if (serviceInput) {
            for (let i = 0; i < serviceInput.options.length; i++) {
              if (serviceInput.options[i].text.toLowerCase().includes(serviceSelect.value.toLowerCase())) {
                serviceInput.selectedIndex = i;
                break;
              }
            }
          }
          if (messageInput) {
            messageInput.value = `Calculated Estimate: ${range} for ~${footage} of roofline (${serviceName}). Please confirm availability for an on-site verification.`;
          }
          const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
          bsModal.show();
        } else {
          // If on pricing page, scroll to contact form or redirect to contact.html
          window.location.href = `contact.html?service=${encodeURIComponent(serviceName)}&estimate=${encodeURIComponent(range)}&footage=${encodeURIComponent(footage)}`;
        }
      });
    }

    // Run initial calculation
    calculate();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCalculator);
  } else {
    initCalculator();
  }
})();

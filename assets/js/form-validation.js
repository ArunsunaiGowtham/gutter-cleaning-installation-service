/**
 * ApexGutter - Form Validation & Frontend Demo Submission Handler
 */
(function() {
  function initFormValidation() {
    // 1. Check URL parameters for pre-filling contact form
    const urlParams = new URLSearchParams(window.location.search);
    const prefillService = urlParams.get('service');
    const prefillEstimate = urlParams.get('estimate');
    const prefillFootage = urlParams.get('footage');

    const contactForm = document.getElementById('estimateContactForm');
    if (contactForm) {
      if (prefillService) {
        const serviceSelect = contactForm.querySelector('#serviceType');
        if (serviceSelect) {
          for (let i = 0; i < serviceSelect.options.length; i++) {
            if (serviceSelect.options[i].text.toLowerCase().includes(prefillService.toLowerCase()) || 
                serviceSelect.options[i].value.toLowerCase().includes(prefillService.toLowerCase())) {
              serviceSelect.selectedIndex = i;
              break;
            }
          }
        }
      }

      if (prefillEstimate || prefillFootage) {
        const msgField = contactForm.querySelector('#message');
        if (msgField && !msgField.value) {
          msgField.value = `Online Calculator Reference: ${prefillEstimate || 'Custom Quote'} for ${prefillFootage || 'Roofline'}. Please schedule a free on-site verification.`;
        }
      }
    }

    // 2. Attach validation to all estimate / contact forms
    const formsToValidate = document.querySelectorAll('.needs-validation, #estimateContactForm, #modalEstimateForm, #newsletterForm');

    formsToValidate.forEach(form => {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        const isValid = validateCustomForm(form);

        if (!isValid) {
          form.classList.add('was-validated');
          return;
        }

        // Handle frontend demonstration submission
        handleDemoSubmit(form);
      });
    });

    function validateCustomForm(form) {
      let valid = true;

      // Inputs to check
      const nameInput = form.querySelector('[name="name"], #fullName, #name');
      const emailInput = form.querySelector('[name="email"], #emailAddress, #email');
      const phoneInput = form.querySelector('[name="phone"], #phoneNumber, #phone');
      const serviceSelect = form.querySelector('[name="service"], #serviceType, #modalServiceType');
      const agreementCheck = form.querySelector('#privacyAgree, #modalPrivacyAgree, [name="agree"]');

      // Clear previous custom error states
      form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));

      if (nameInput) {
        if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
          nameInput.classList.add('is-invalid');
          valid = false;
        } else {
          nameInput.classList.add('is-valid');
        }
      }

      if (emailInput) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
          emailInput.classList.add('is-invalid');
          valid = false;
        } else {
          emailInput.classList.add('is-valid');
        }
      }

      if (phoneInput && phoneInput.hasAttribute('required')) {
        const cleanPhone = phoneInput.value.replace(/\D/g, '');
        if (cleanPhone.length < 10) {
          phoneInput.classList.add('is-invalid');
          valid = false;
        } else {
          phoneInput.classList.add('is-valid');
        }
      }

      if (serviceSelect && serviceSelect.hasAttribute('required')) {
        if (!serviceSelect.value) {
          serviceSelect.classList.add('is-invalid');
          valid = false;
        } else {
          serviceSelect.classList.add('is-valid');
        }
      }

      if (agreementCheck && agreementCheck.hasAttribute('required')) {
        if (!agreementCheck.checked) {
          agreementCheck.classList.add('is-invalid');
          valid = false;
        } else {
          agreementCheck.classList.add('is-valid');
        }
      }

      return valid;
    }

    function handleDemoSubmit(form) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : 'Submit';

      // Show loading spinner
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Processing Demo Request...`;
      }

      // Simulate handling
      setTimeout(() => {
        // Collect entered values for realistic display
        const nameVal = form.querySelector('[name="name"], #fullName, #name')?.value || 'Valued Client';
        const serviceVal = form.querySelector('[name="service"], #serviceType, #modalServiceType')?.selectedOptions[0]?.text || 'Gutter Cleaning & Inspection';
        const phoneVal = form.querySelector('[name="phone"], #phoneNumber, #phone')?.value || 'Provided number';

        // Reset button
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }

        // Close modal if form was inside modal
        const parentModal = form.closest('.modal');
        if (parentModal && typeof bootstrap !== 'undefined') {
          const bsModal = bootstrap.Modal.getInstance(parentModal);
          if (bsModal) bsModal.hide();
        }

        // Show comprehensive demo notification modal or alert
        showDemoFeedbackModal(nameVal, serviceVal, phoneVal);

        // Reset form
        form.reset();
        form.classList.remove('was-validated');
        form.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
      }, 750);
    }

    function showDemoFeedbackModal(name, service, phone) {
      let feedbackModal = document.getElementById('demoFeedbackModal');
      if (!feedbackModal) {
        const modalHtml = `
          <div class="modal fade" id="demoFeedbackModal" tabindex="-1" aria-labelledby="demoFeedbackTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content shadow-lg border-0 rounded-4 overflow-hidden">
                <div class="modal-header bg-success text-white py-3">
                  <h5 class="modal-title d-flex align-items-center gap-2" id="demoFeedbackTitle">
                    <i class="bi bi-check-circle-fill fs-4"></i>
                    <span>Frontend Demo Submission Handled</span>
                  </h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                  <div class="d-flex align-items-center gap-3 mb-3 p-3 rounded-3 bg-light text-dark">
                    <div class="rounded-circle bg-success text-white p-2 d-flex align-items-center justify-content-center" style="width:48px;height:48px;">
                      <i class="bi bi-shield-check fs-4"></i>
                    </div>
                    <div>
                      <h6 class="mb-0 fw-bold" id="demoFeedbackClient">Thank you, ${name}!</h6>
                      <small class="text-muted" id="demoFeedbackService">Service: ${service}</small>
                    </div>
                  </div>
                  <div class="alert alert-info py-2 px-3 small mb-3">
                    <i class="bi bi-info-circle-fill me-1"></i>
                    <strong>Notice:</strong> This is a frontend demonstration template. No server backend is connected; your request data was validated and processed safely in your browser.
                  </div>
                  <p class="text-secondary small mb-0">
                    In a production deployment, this action triggers our automated CRM workflow, dispatching an immediate quote SMS to <strong>${phone}</strong> and notifying the regional service crew.
                  </p>
                </div>
                <div class="modal-footer bg-light border-0 py-3">
                  <button type="button" class="btn btn-primary rounded-pill px-4" data-bs-dismiss="modal">Close Window</button>
                </div>
              </div>
            </div>
          </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        feedbackModal = document.getElementById('demoFeedbackModal');
      } else {
        const nameEl = document.getElementById('demoFeedbackClient');
        const serviceEl = document.getElementById('demoFeedbackService');
        if (nameEl) nameEl.textContent = `Thank you, ${name}!`;
        if (serviceEl) serviceEl.textContent = `Service: ${service}`;
      }

      if (typeof bootstrap !== 'undefined') {
        const modalInstance = bootstrap.Modal.getOrCreateInstance(feedbackModal);
        modalInstance.show();
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFormValidation);
  } else {
    initFormValidation();
  }
})();

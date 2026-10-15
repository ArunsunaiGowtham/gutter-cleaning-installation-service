/**
 * ApexGutter - Services Data Repository
 * 9 Core Professional Gutter Cleaning & Installation Services
 */
const SERVICES_DATA = [
  {
    id: "residential-cleaning",
    title: "Residential Gutter Cleaning",
    subtitle: "Complete Hand-Scooping, High-Flow Downspout Clearing & Ground Cleanup",
    badge: "Most Popular",
    category: "Cleaning",
    image: "assets/images/services/service-residential.jpg",
    icon: "bi-house-heart",
    shortDesc: "Thorough removal of leaves, roof grit, moss, and sludge from gutters and downspouts for single and multi-story homes.",
    fullOverview: "Our residential gutter cleaning service provides comprehensive seasonal protection for your home. We clear every foot of your roofline guttering by hand and specialized scoops, bag all organic debris for zero lawn mess, and hydro-flush every downspout to ensure unobstructed water flow safely away from your foundation.",
    keyBenefits: [
      "Protects foundation from basement flooding and structural soil erosion",
      "Eliminates standing water where mosquitoes, pests, and mold flourish",
      "Prevents fascia board rot and soffit decay behind overloaded gutters",
      "Includes full downspout water-flush test to ground discharge level",
      "Ground-level cleanup guarantee: no debris or mud left on landscaping"
    ],
    problemsSolved: [
      {
        title: "Basement Flooding & Sump Overload",
        desc: "When gutters overflow, thousands of gallons of stormwater pour straight down against basement walls, penetrating foundation joints."
      },
      {
        title: "Rotten Fascia & Soffit Wood",
        desc: "Standing wet leaves trap moisture against wooden fascia boards, leading to soft rot, costly carpenter repairs, and mold growth."
      },
      {
        title: "Pest & Mosquito Nesting",
        desc: "Stagnant gutter sludge creates an ideal habitat for mosquitoes, birds, squirrels, and carpenter ants right beneath your roof."
      },
      {
        title: "Landscape Trenches & Lawn Damage",
        desc: "Uncontrolled water cascading over gutter edges carves unsightly trenches in flower beds and washes away topsoil and mulch."
      }
    ],
    processSteps: [
      { step: "01", name: "Safe Ladder Setup", desc: "We place standoff ladder stabilizers that protect your gutters from dents and roof shingles from scuffing." },
      { step: "02", name: "Hand-Scoop & Bagging", desc: "Debris is collected directly into heavy-duty contractor bags rather than blown into your yard or onto shrubbery." },
      { step: "03", name: "Hydro-Flushing Downspouts", desc: "We snake and flush every vertical downspout drop to ensure water exits freely through splash blocks." },
      { step: "04", name: "Slope & Seam Check", desc: "Our technicians inspect gutter gradient, bracket tightness, and corner miters for leaks or detachment." },
      { step: "05", name: "Zero-Mess Grounds Polish", desc: "We blow off walkways, patios, and driveways, leaving your property in pristine condition." }
    ],
    specs: {
      "Recommended Frequency": "2-3 times per year (Spring & Late Autumn)",
      "Standard Turnaround": "1.5 - 2.5 hours per home",
      "Safety Compliance": "OSHA-compliant harnesses & standoff stabilizers",
      "Service Warranty": "30-Day No-Clog Performance Guarantee"
    },
    pricingEstimate: "$150 - $275 (Depends on single vs. 2-story & linear footage)",
    faqs: [
      { q: "How often should I have my gutters cleaned?", a: "For most homes, twice per year is optimal: once in late spring to remove pollen tassels and seeds, and once in late autumn after deciduous trees have dropped their leaves. Homes surrounded by heavy pine or oak may require quarterly service." },
      { q: "Do I need to be home during the service?", a: "No, as long as our technicians have exterior access around the home, gates are unlocked, pets are inside, and an outdoor water spigot is available." },
      { q: "Do you clean the roof valleys as well?", a: "Yes, we clear debris from adjacent roof valleys and near dormers that channel rainfall directly into your gutter tracks." }
    ]
  },
  {
    id: "commercial-cleaning",
    title: "Commercial Gutter Cleaning",
    subtitle: "High-Capacity Box Gutters, Scuppers & Commercial Downspout Maintenance",
    badge: "Commercial",
    category: "Commercial",
    image: "assets/images/services/service-commercial.jpg",
    icon: "bi-building",
    shortDesc: "Industrial-grade maintenance for warehouses, retail centers, HOAs, apartment complexes, and office buildings with safety lift equipment.",
    fullOverview: "Commercial roofs handle immense volumes of rainwater. Our commercial gutter cleaning service handles wide box gutters, parapet scuppers, roof drains, and industrial leaders. Our crews operate with full OSHA compliance, aerial boom lifts, and safety certification to keep commercial operations running smoothly.",
    keyBenefits: [
      "Custom scheduling outside business hours to prevent client disruption",
      "Complete drone & digital photographic compliance documentation for facility managers",
      "Certified boom lift and fall-arrest certified roofing technicians",
      "Prevents interior water leaks, inventory damage, and costly commercial downtime",
      "Annual and bi-annual commercial preventative service agreements available"
    ],
    problemsSolved: [
      {
        title: "Commercial Roof Ponding",
        desc: "Clogged scuppers cause tons of standing water weight on flat roofs, risking structural deflection and roof membrane punctures."
      },
      {
        title: "Customer Walkway Water Cascades",
        desc: "Overflowing commercial gutters dump sheets of water on entryways, creating slip-and-fall liabilities for customers and tenants."
      },
      {
        title: "Facade Staining & Wall Corrosion",
        desc: "Acidic standing water stains architectural cladding, brick masonry, and exterior window frames."
      },
      {
        title: "Internal Drain Backups",
        desc: "Leaves entering internal building drain lines can back up inside mechanical rooms and commercial ceiling plenums."
      }
    ],
    processSteps: [
      { step: "01", name: "Facility Site Safety Plan", desc: "Establishing pedestrian safety zones, cones, and staging for lifts and equipment." },
      { step: "02", name: "High-Capacity Debris Extraction", desc: "Industrial wet/dry vac and hand extraction of heavy sludge, sediment, and litter." },
      { step: "03", name: "Scupper & Leader Jetting", desc: "High-volume water jetting of downpipe drops, scupper boxes, and ground tie-ins." },
      { step: "04", name: "Digital Photo Reporting", desc: "Complete before-and-after digital report delivered to property managers for building records." }
    ],
    specs: {
      "Facility Types": "Industrial, Retail Strips, HOAs, Warehouses, Schools",
      "Equipment Used": "Bucket lifts, boom trucks, safety line anchor systems",
      "Insurance Coverage": "$2,000,000 General Commercial Liability",
      "Billing Terms": "Net-30 available for commercial accounts"
    },
    pricingEstimate: "Custom Quote (Based on building square footage and roof access)",
    faqs: [
      { q: "Can you service multi-building HOA communities?", a: "Yes, we regularly service multi-unit townhome associations, condo complexes, and retail centers with tiered multi-building discounts." },
      { q: "Do you supply proof of insurance and worker's compensation?", a: "Absolutely. We supply Certificates of Insurance (COI) naming your property management firm or building owner as additional insured." }
    ]
  },
  {
    id: "downspout-cleaning",
    title: "Downspout Cleaning & Clearing",
    subtitle: "High-Pressure Jetting, Snaking & Underground Drain Line Inspection",
    badge: "Core Service",
    category: "Maintenance",
    image: "assets/images/services/service-downspout.jpg",
    icon: "bi-water",
    shortDesc: "Unclogging packed downspouts, elbows, and underground corrugated drain lines using rotary snakes and high-pressure jetting.",
    fullOverview: "A gutter is only as effective as the downspout that empties it. Clogged downspout elbows and buried discharge pipes are the #1 cause of sudden gutter overflow. We clear stubborn leaf plugs, bird nests, and roof grit using mechanical plumbing snakes, hydro-jetters, and cleanout adapters.",
    keyBenefits: [
      "Clears hidden compacted clogs in elbows and subterranean drain lines",
      "Verifies unobstructed discharge to pop-up emitters or storm catch basins",
      "Prevents frozen burst downspouts during cold winter freezes",
      "Restores 100% flow capacity for severe thunderstorm downpours",
      "Includes installation of removable cleanout filters where needed"
    ],
    problemsSolved: [
      {
        title: "Frozen Downspouts in Winter",
        desc: "Trapped water inside a blocked downspout freezes into solid ice, splitting the seams open and ripping the pipe off the wall."
      },
      {
        title: "Corner Overflowing During Storms",
        desc: "A clean horizontal gutter will still overflow violently if the 3-inch downspout drop is choked with twigs and pine needles."
      },
      {
        title: "Underground Pipe Clogging",
        desc: "Corrugated black underground pipes collect heavy shingle silt that completely shuts off drainage away from the house."
      },
      {
        title: "Soffit & Wall Mildew",
        desc: "Water spraying backwards from a clogged downspout elbow soaks siding and wood framing."
      }
    ],
    processSteps: [
      { step: "01", name: "Elbow Tap & Sound Check", desc: "Acoustically locating the exact blockage point inside vertical and transition elbows." },
      { step: "02", name: "Rotary Mechanical Snake", desc: "Feeding flexible rotating cables through elbows to break apart compacted root and leaf masses." },
      { step: "03", name: "High-Pressure Hydro Flush", desc: "Injecting pressurized water downward to flush all broken sediment out the discharge exit." },
      { step: "04", name: "Discharge Verification", desc: "Ensuring water exits cleanly through daylight pipes, pop-ups, or splash pads." }
    ],
    specs: {
      "Downspout Types": "2x3 standard, 3x4 oversized, round corrugated, underground PVC",
      "Tools": "Plumbing snakes, jetting nozzles, inspection cameras",
      "Turnaround": "30 - 60 minutes",
      "Guarantee": "Unrestricted Flow Guarantee"
    },
    pricingEstimate: "$75 - $140 (Often bundled with general gutter cleaning)",
    faqs: [
      { q: "What if my underground drain pipe is crushed or filled with tree roots?", a: "We use diagnostic cameras to inspect underground lines. If roots or broken pipe are found, we provide video proof and recommend line jetting or surface rerouting." }
    ]
  },
  {
    id: "gutter-inspection",
    title: "Multi-Point Gutter & Roofline Inspection",
    subtitle: "Digital Slope Alignment, Seam Integrity & Fascia Health Evaluation",
    badge: "Diagnostic",
    category: "Inspection",
    image: "assets/images/services/service-inspection.jpg",
    icon: "bi-search",
    shortDesc: "Detailed structural assessment covering slope pitch, hidden hanger spacing, seam seal integrity, and wood rot detection.",
    fullOverview: "Before costly water damage appears inside your ceiling or basement, an expert multi-point inspection identifies subtle warning signs: improper gutter pitch, loose spike fasteners, hairline joint fractures, and rotted fascia boards. We provide a full digital condition report with annotated photographs and repair recommendations.",
    keyBenefits: [
      "Precision digital torpedo level checks for correct 1/4-inch per 10-foot drainage pitch",
      "Hidden hanger pull-out inspection checking for fastener grip into solid rafter tails",
      "Thermal & visual inspection of fascia boards for hidden dry rot and termite moisture",
      "Zero-obligation photo report detailing priority repairs vs. optional enhancements",
      "Complimentary with any major cleaning or seamless installation estimate"
    ],
    problemsSolved: [
      {
        title: "Improper Slope / Standing Pools",
        desc: "Gutters that sag in the center hold stagnant pools of water that breed mosquitoes and cause accelerated rust and bracket failure."
      },
      {
        title: "Failing Spike-and-Ferrule Fasteners",
        desc: "Older gutters fastened with nail spikes gradually pull free under snow loads, detaching completely from the roofline."
      },
      {
        title: "Undetected Seam Leaks",
        desc: "Hairline cracks in miter seams drip water directly into fascia wood and exterior window headers."
      },
      {
        title: "Inadequate Gutter Sizing",
        desc: "Steep or large roof planes often overwhelm standard 5-inch gutters, requiring high-capacity 6-inch systems."
      }
    ],
    processSteps: [
      { step: "01", name: "Perimeter Pitch Survey", desc: "Measuring slope angle with precision levels across all eaves to ensure water flows toward drops." },
      { step: "02", name: "Fastener & Bracket Audit", desc: "Testing structural integrity and spacing of all hangers (standard maximum 24 inches apart)." },
      { step: "03", name: "Endcap & Miter Seam Test", desc: "Testing sealant flexibility and inspecting for microscopic water weep marks." },
      { step: "04", name: "Fascia Board Probe", desc: "Checking wood density and paint adhesion behind the gutter line." }
    ],
    specs: {
      "Report Delivery": "Digital PDF with high-res photos sent within 2 hours",
      "Inspector Qualifications": "Certified Roofing & Gutter Specialists",
      "Turnaround": "45 minutes",
      "Cost": "Free with qualifying service or $49 stand-alone"
    },
    pricingEstimate: "Free with Service / $49 Standalone Diagnostic",
    faqs: [
      { q: "Can you inspect two-story and steep roofs safely?", a: "Yes, our certified inspectors use OSHA-rated extension ladders, harness tie-offs, and high-definition optical inspection poles." }
    ]
  },
  {
    id: "gutter-repair",
    title: "Gutter Repair & Realignment",
    subtitle: "Seam Resealing, Sagging Realignment & Heavy-Duty Hanger Reinforcement",
    badge: "Repair",
    category: "Repair",
    image: "assets/images/services/service-repair.jpg",
    icon: "bi-tools",
    shortDesc: "Eliminate leaks, re-pitch standing water troughs, and reinforce pulling gutters with heavy-duty hidden screw hangers.",
    fullOverview: "You don't always need an entirely new gutter system. In many cases, expert repairs can restore full function and extend the lifespan of your gutters by 10 to 15 years. We replace loose spikes with heavy-duty hidden screw brackets, strip old brittle silicone, and reseal all joints with industrial elastomeric polymer sealants.",
    keyBenefits: [
      "Re-sloping sagging gutter sections so standing water drains out completely",
      "Replacing pulled nails with zinc-coated heavy-duty internal screw hangers",
      "Sealing mitered corners and endcaps with tri-polymer industrial sealant",
      "Fascia board reinforcement and aluminum flashing drip edge installation",
      "Significantly cheaper than a full replacement while preserving roof aesthetics"
    ],
    problemsSolved: [
      {
        title: "Dripping Corner Miter Joints",
        desc: "Old dried-out caulking cracks under seasonal expansion and contraction, causing continuous dripping on entrances."
      },
      {
        title: "Gutter Pulling Away From Eaves",
        desc: "Heavy winter snow or wet leaves rip old spike fasteners out of rotten fascia wood, threatening to drop the gutter."
      },
      {
        title: "Mid-Span Sagging & Low Spots",
        desc: "Inadequate bracket spacing creates low spots where 30+ pounds of water sits permanently."
      },
      {
        title: "Detached Downspout Straps",
        desc: "Windstorms tear downspout brackets loose, letting pipes rattle and disconnect during rain."
      }
    ],
    processSteps: [
      { step: "01", name: "Surface Prep & Old Caulk Strip", desc: "Scraping, wire-brushing, and degreasing existing failed sealant from joints." },
      { step: "02", name: "Re-pitching to Slope", desc: "Adjusting elevation line so that water flows continuously at 1/4-inch slope per 10 feet." },
      { step: "03", name: "Hidden Screw Hanger Anchoring", desc: "Driving 1.5-inch threaded structural screws directly into solid wood rafter tails." },
      { step: "04", name: "Elastomeric Polymer Sealing", desc: "Applying commercial-grade waterproof sealant that expands and contracts with weather." },
      { step: "05", name: "Water Flow Testing", desc: "Simulating heavy rain to verify zero leaks and complete water clearance." }
    ],
    specs: {
      "Sealant Used": "Industrial elastomeric tri-polymer (UV and freeze resistant)",
      "Hangers": "Heavy-duty extruded aluminum screw brackets",
      "Turnaround": "1 - 3 hours depending on repair scope",
      "Warranty": "2-Year Workmanship & Leak-Free Guarantee"
    },
    pricingEstimate: "$95 - $320 (Based on number of joints and realignment length)",
    faqs: [
      { q: "Is silicone caulk from the hardware store good enough for gutters?", a: "Standard silicone caulk fails rapidly on gutters because metal expands and contracts drastically with temperature. We use specialized elastomeric gutter sealants engineered specifically for thermal cycling." }
    ]
  },
  {
    id: "seamless-installation",
    title: "Seamless Gutter Installation",
    subtitle: "Custom On-Site Roll-Formed Continuous Aluminum & Copper Systems",
    badge: "Premium Upgrade",
    category: "Installation",
    image: "assets/images/services/service-seamless.jpg",
    icon: "bi-shield-check",
    shortDesc: "Custom-extruded on-site to the exact millimeter dimensions of your home, eliminating 99% of leak points permanently.",
    fullOverview: "Sectional gutters joined every 10 feet are inherently vulnerable to leaks, snagged debris, and rust. With our custom on-site seamless gutter fabrication, we bring our specialized mobile roll-forming machine directly to your driveway. We extrude continuous, uninterrupted lengths of heavy-gauge .032 aluminum or architectural copper, tailored precisely to your roofline.",
    keyBenefits: [
      "Zero mid-run seams: eliminates leaks, rust spots, and debris catching points",
      "Heavy-gauge .032 commercial aluminum withstands heavy snow loads and ladder pressure",
      "Baked-on enamel finish available in 28+ designer architectural colors to match your trim",
      "Choice of 5-inch residential, 6-inch oversized, or 7-inch high-capacity K-style & half-round",
      "Installed exclusively with heavy-duty hidden screw hangers spaced every 24 inches"
    ],
    problemsSolved: [
      {
        title: "Perpetual Leaks at Section Seams",
        desc: "Sectional DIY gutters have seams every 10 feet that inevitably leak within 2-3 seasons."
      },
      {
        title: "Gutter Overflow in Heavy Downpours",
        desc: "Standard builder-grade 5-inch gutters frequently overflow during severe storms; our 6-inch seamless gutters carry 40% more water volume."
      },
      {
        title: "Rust and Paint Flaking",
        desc: "Our premium aluminum gutters are 100% rust-proof with lifetime factory baked enamel finish."
      },
      {
        title: "Curb Appeal & Resale Value",
        desc: "Crisp, clean seamless gutter lines dramatically improve the curb appeal and value of your home."
      }
    ],
    processSteps: [
      { step: "01", name: "Laser Roofline Measurement", desc: "Measuring every eave to the exact fraction of an inch." },
      { step: "02", name: "On-Site Roll-Forming Extrusion", desc: "Our mobile factory trailer runs custom seamless gutters in single continuous lengths up to 100+ feet." },
      { step: "03", name: "Precision Miter Cutting", desc: "Handcrafting clean factory-fit box miters and custom downspout outlets." },
      { step: "04", name: "Hidden Screw Hanger Mounting", desc: "Fastening every 24 inches into rafter tails using rust-proof self-piercing screws." },
      { step: "05", name: "Downspout Custom Assembly", desc: "Fastening color-matched downspouts with secure masonry/siding anchors and flip-up hinges." }
    ],
    specs: {
      "Materials": "Heavy Gauge .032 Aluminum, 16oz Architectural Copper, Galvalume",
      "Profiles": "5\" K-Style, 6\" Oversized K-Style, 6\" Half-Round European",
      "Color Options": "28+ baked-on enamel colors with scratch guard",
      "Warranty": "20-Year Material Warranty & 5-Year Installation Warranty"
    },
    pricingEstimate: "$8.50 - $14.50 per linear foot (Installed with hardware)",
    faqs: [
      { q: "What is the difference between 5-inch and 6-inch gutters?", a: "6-inch gutters hold approximately 40% more water than standard 5-inch gutters, making them ideal for steep roofs, metal roofs, and large roof surfaces where rain cascades quickly." },
      { q: "Do seamless gutters have any seams at all?", a: "Seamless gutters have zero seams along straight runs! The only joints exist at roof corners (miters) and endcaps, which are sealed with industrial polymer sealant." }
    ]
  },
  {
    id: "gutter-replacement",
    title: "Gutter Replacement & Fascia Restoration",
    subtitle: "Complete Removal of Damaged Gutters & Rot-Resistant Wood Restoration",
    badge: "Full Replacement",
    category: "Installation",
    image: "assets/images/services/service-replacement.jpg",
    icon: "bi-arrow-repeat",
    shortDesc: "Complete teardown of obsolete, rusted gutters, rotten fascia board repair, and installation of a state-of-the-art drainage system.",
    fullOverview: "When gutters are aged, crushed, or rusted through, spot repairs are a temporary band-aid. Our complete gutter replacement service removes and recycles your old system, repairs rotted or water-damaged fascia and soffits behind it, installs premium drip-edge flashing, and installs a brand-new custom seamless gutter system built to last decades.",
    keyBenefits: [
      "Full removal and eco-friendly metal recycling of your old gutters and brackets",
      "Inspection and replacement of water-damaged fascia wood with PVC or primed cedar",
      "Installation of aluminum drip edge flashing to prevent water wicking behind siding",
      "Upsizing to high-capacity 6-inch gutters to permanently stop torrential overflow",
      "Instant improvement in home structural protection and neighborhood curb appeal"
    ],
    problemsSolved: [
      {
        title: "Rusted & Corroded Steel Gutters",
        desc: "Pinhole rust clusters that cannot be patched permanently and continually stain siding."
      },
      {
        title: "Rotten Fascia Wood Behind Gutters",
        desc: "Mounting new gutters to rotten wood results in immediate failure; we repair the underlying wood structure first."
      },
      {
        title: "Storm-Damaged or Crushed Troughs",
        desc: "Tree branches or heavy ice dams that have crushed or bent gutters beyond realignment."
      },
      {
        title: "Outdated Builder-Grade Systems",
        desc: "Undersized systems that fail repeatedly during heavy modern seasonal rainfall."
      }
    ],
    processSteps: [
      { step: "01", name: "Safe Removal & Debris Bagging", desc: "Dismantling old gutters and transporting them for responsible metal recycling." },
      { step: "02", name: "Fascia & Rafter Inspection", desc: "Checking wood moisture; replacing rotten sections with rot-proof composite or primed cedar." },
      { step: "03", name: "Drip Edge Flashing Install", desc: "Tucking aluminum flashing under shingles and over gutter edge to keep water flowing into the trough." },
      { step: "04", name: "Seamless System Installation", desc: "Fabricating and mounting your custom seamless gutters with hidden screw hangers." },
      { step: "05", name: "Full Water Flow Calibration", desc: "Testing drainage velocity and downspout discharge zones." }
    ],
    specs: {
      "Fascia Replacement": "Rot-proof PVC composite or hand-primed spruce/cedar",
      "Metal Removal": "100% recycling included",
      "Turnaround": "1 day for standard residential homes",
      "Warranty": "25-Year Manufacturer Warranty + 10-Year Workmanship"
    },
    pricingEstimate: "$1,200 - $3,500 for entire average home (Includes gutters, downspouts & hardware)",
    faqs: [
      { q: "How long does a full gutter replacement take?", a: "Most residential home replacements are completed in a single day, including old gutter removal, fascia prep, seamless fabrication, and clean-up." }
    ]
  },
  {
    id: "gutter-guards",
    title: "Gutter Guard & Micro-Mesh Installation",
    subtitle: "Permanent Leaf, Pine Needle & Pest Blockade with Stainless Steel Mesh",
    badge: "Protection",
    category: "Protection",
    image: "assets/images/services/service-guards.jpg",
    icon: "bi-shield-shaded",
    shortDesc: "Never clean your gutters again with surgical-grade stainless steel micro-mesh guards that block pine needles, leaves, and roof sand.",
    fullOverview: "Tired of risking dangerous ladder climbs every autumn? Our commercial-grade stainless steel micro-mesh gutter guards filter out everything down to single pine needles and roof shingle granules, while allowing torrential rain to flow freely into your gutters. Installed with anodized aluminum frames and stainless screws, they will not warp, rust, or blow off.",
    keyBenefits: [
      "Blocks leaves, pine needles, maple whirligigs, oak tassels, and roof gravel",
      "Eliminates the dangerous chore and expense of climbing ladders twice a year",
      "Prevents wasps, hornets, birds, and squirrels from nesting in your eaves",
      "Surgical-grade 316 stainless steel mesh that never rusts or corrodes",
      "Strengthens overall gutter rigidity against heavy winter snow and ice loads"
    ],
    problemsSolved: [
      {
        title: "Perpetual Ladder Fall Hazards",
        desc: "Ladder falls are one of the leading causes of severe homeowner injuries; gutter guards eliminate routine ladder climbing."
      },
      {
        title: "Pine Needle Penetration",
        desc: "Cheap slotted plastic screens let tiny pine needles slide right in; our micro-pores measure 50 microns to block needles."
      },
      {
        title: "Gutter Fire Hazard in Wildfire Zones",
        desc: "Dry leaves sitting in gutters are a major wildfire ember ignition hazard; metal guards keep leaves out entirely."
      },
      {
        title: "Pest & Bee Infestations",
        desc: "Eliminates sheltered, moist troughs where wasps build nests and rodents hide."
      }
    ],
    processSteps: [
      { step: "01", name: "Deep Gutter Clean & Flush", desc: "We completely clean, hydro-flush, and re-seal all gutter joints prior to guard installation." },
      { step: "02", name: "Slope & Fastener Tune-Up", desc: "Reinforcing all brackets so the gutter is structurally rock-solid before caps are attached." },
      { step: "03", name: "Custom Guard Sizing", desc: "Precision cutting micro-mesh panels to match the exact angles of roof valleys and hips." },
      { step: "04", name: "Self-Tapping Screw Fastening", desc: "Fastening the guard frame securely to the gutter front lip and fascia—no glue or clips." },
      { step: "05", name: "Hydro Flow Flood Test", desc: "Verifying high-volume water absorption with zero surface tension overflow." }
    ],
    specs: {
      "Mesh Material": "316 Marine-Grade Stainless Steel (50-micron mesh)",
      "Frame Material": "Extruded Anodized T6 Structural Aluminum",
      "Pitch Compatibility": "Works on low pitch, steep pitch, slate, shingle, and metal roofs",
      "Guarantee": "No-Clog Money-Back Guarantee for 25 Years"
    },
    pricingEstimate: "$7.50 - $12.00 per linear foot installed",
    faqs: [
      { q: "Will water overshoot the gutters in heavy rainstorms?", a: "No. Our micro-mesh guards utilize hydrodynamic surface tension technology and corrugated mesh ribs that actively draw heavy rainwater downward into the gutter while pushing dry leaves off in the breeze." },
      { q: "Can gutter guards handle pine needles?", a: "Yes! Our stainless steel micro-mesh features pores so microscopic that even fine white pine needles and roof grit cannot enter." }
    ]
  },
  {
    id: "seasonal-maintenance",
    title: "Seasonal Gutter Maintenance Plan",
    subtitle: "Scheduled Spring Debris Clearing, Pre-Winter Freeze Flush & Annual Priority Care",
    badge: "Membership",
    category: "Maintenance",
    image: "assets/images/services/service-seasonal.jpg",
    icon: "bi-calendar-check",
    shortDesc: "Automatic pre-scheduled spring and autumn gutter cleanouts, priority post-storm emergency dispatch, and 15% discount on repairs.",
    fullOverview: "Set your home exterior maintenance on autopilot. Our seasonal gutter maintenance plans ensure your gutters are cleaned and inspected at the ideal moments: after spring tree blooms fall and after autumn deciduous trees drop their foliage before winter freezes arrive. Members enjoy automatic scheduling, discount rates, and priority storm response.",
    keyBenefits: [
      "Automatic seasonal visits: you never have to remember to schedule service",
      "Spring visit removes pollen, oak catkins, and spring seed pods",
      "Autumn visit removes heavy wet oak and maple leaves before winter freezes",
      "Priority 24-hour storm response dispatch following severe hurricanes or windstorms",
      "15% loyalty discount on all gutter repairs, realignments, and guards"
    ],
    problemsSolved: [
      {
        title: "Procrastination & Forgotten Cleanouts",
        desc: "Forgetting to clean gutters before the first winter freeze leads to massive ice dams and ruined gutters."
      },
      {
        title: "Scramble During Autumn Rush",
        desc: "During November leaf drop, contractors book out weeks in advance; members are guaranteed prime cleaning dates."
      },
      {
        title: "Winter Ice Damming",
        desc: "Clogged gutters full of soggy leaves freeze into heavy ice blocks that rip gutters away and leak into ceilings."
      },
      {
        title: "Expensive Emergency Repair Bills",
        desc: "Regular preventative care prevents emergency $2,000+ water damage restoration repairs."
      }
    ],
    processSteps: [
      { step: "01", name: "Automatic Schedule Notification", desc: "We notify you 7 days prior to your seasonal window; no phone tag required." },
      { step: "02", name: "Spring Bloom Extraction", desc: "Thorough removal of seeds, blossoms, pollen sludge, and bird nests." },
      { step: "03", name: "Autumn Leaf Clean & Flush", desc: "Removing dense deciduous leaves and flushing downspouts to prepare for freezing temps." },
      { step: "04", name: "Digital Health Scorecard", desc: "A seasonal report card tracking your gutter slope, fasteners, and roof condition." }
    ],
    specs: {
      "Frequency": "2 visits (Bi-Annual) or 4 visits (Quarterly for dense tree canopy)",
      "Member Perks": "15% off repairs, 24h priority storm queue",
      "Contract": "Cancel anytime with 30-day notice",
      "Price Protection": "Rate locked for 24 months"
    },
    pricingEstimate: "From $240/year (Covers 2 comprehensive visits)",
    faqs: [
      { q: "How do I know when you are coming?", a: "We send automated SMS and email reminders one week before, the day before, and when the technician is in transit to your home." },
      { q: "Can I transfer my membership if I sell my home?", a: "Yes, our seasonal maintenance plan is transferable to the new homeowner, serving as an attractive selling point!" }
    ]
  }
];

if (typeof window !== "undefined") {
  window.SERVICES_DATA = SERVICES_DATA;
}
if (typeof module !== "undefined") {
  module.exports = SERVICES_DATA;
}

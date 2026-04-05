"use client";
import React, { useState } from "react";

const TicketInquiryForm = ({ defaultTab = "flight", showTabs = true }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [tripType, setTripType] = useState("round-trip");

  return (
    <div className="inquiry-form-wrapper mb-80">
      {showTabs && (
        <div className="form-tabs d-flex mb-0">
          <button
            className={`tab-btn ${activeTab === "flight" ? "active" : ""}`}
            onClick={() => setActiveTab("flight")}
          >
            <i className="bi bi-airplane mr-2" /> Flight Inquiry
          </button>
          <button
            className={`tab-btn ${activeTab === "hotel" ? "active" : ""}`}
            onClick={() => setActiveTab("hotel")}
          >
            <i className="bi bi-building mr-2" /> Hotel Reservation
          </button>
        </div>
      )}

      <div className={`form-content-box p-4 p-lg-5 shadow-lg ${showTabs ? 'rounded-bottom' : 'rounded'} bg-white`}>
        {activeTab === "flight" ? (
          <form className="flight-inquiry-form">
            <div className="row g-4">
              {/* Trip Type */}
              <div className="col-12 mb-2">
                <h6 className="form-section-title">1. Trip Details</h6>
                <div className="d-flex flex-wrap gap-4 mt-3">
                  <div className="form-check custom-radio">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tripType"
                      id="oneWay"
                      checked={tripType === "one-way"}
                      onChange={() => setTripType("one-way")}
                    />
                    <label className="form-check-label" htmlFor="oneWay">One Way</label>
                  </div>
                  <div className="form-check custom-radio">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tripType"
                      id="roundTrip"
                      checked={tripType === "round-trip"}
                      onChange={() => setTripType("round-trip")}
                    />
                    <label className="form-check-label" htmlFor="roundTrip">Round Trip</label>
                  </div>
                  <div className="form-check custom-radio">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="tripType"
                      id="multiCity"
                      checked={tripType === "multi-city"}
                      onChange={() => setTripType("multi-city")}
                    />
                    <label className="form-check-label" htmlFor="multiCity">Multi-City</label>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="col-md-6 col-lg-3">
                <label className="form-label">Departure City</label>
                <div className="input-with-icon">
                  <i className="bi bi-geo-alt" />
                  <input type="text" className="form-control" placeholder="From (City/Airport)" required />
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <label className="form-label">Destination City</label>
                <div className="input-with-icon">
                  <i className="bi bi-geo-fill" />
                  <input type="text" className="form-control" placeholder="To (City/Airport)" required />
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <label className="form-label">Departure Date</label>
                <input type="date" className="form-control" required />
              </div>
              {tripType === "round-trip" && (
                <div className="col-md-6 col-lg-3">
                  <label className="form-label">Return Date</label>
                  <input type="date" className="form-control" required={tripType === "round-trip"} />
                </div>
              )}

              {/* Travelers */}
              <div className="col-12 mt-4">
                <h6 className="form-section-title">2. Travelers Information</h6>
              </div>
              <div className="col-md-4 col-lg-2">
                <label className="form-label">Adults (12+)</label>
                <input type="number" className="form-control" min="1" defaultValue="1" required />
              </div>
              <div className="col-md-4 col-lg-2">
                <label className="form-label">Children (2-11)</label>
                <input type="number" className="form-control" min="0" defaultValue="0" />
              </div>
              <div className="col-md-4 col-lg-2">
                <label className="form-label">Infants (0-2)</label>
                <input type="number" className="form-control" min="0" defaultValue="0" />
              </div>

              {/* Preferences */}
              <div className="col-12 mt-4">
                <h6 className="form-section-title">3. Travel Preferences</h6>
              </div>
              <div className="col-md-6 col-lg-3">
                <label className="form-label">Cabin Class</label>
                <select className="form-select">
                  <option value="economy">Economy</option>
                  <option value="premium-economy">Premium Economy</option>
                  <option value="business">Business</option>
                  <option value="first-class">First Class</option>
                </select>
              </div>
              <div className="col-md-6 col-lg-3">
                <label className="form-label">Preferred Airline</label>
                <input type="text" className="form-control" placeholder="e.g. Emirates" />
              </div>
              <div className="col-md-6 col-lg-3">
                <label className="form-label">Baggage Requirement</label>
                <select className="form-select">
                  <option value="cabin-only">Cabin Only</option>
                  <option value="20kg">20kg</option>
                  <option value="25kg">25kg</option>
                  <option value="30kg">30kg</option>
                </select>
              </div>
              <div className="col-md-6 col-lg-3">
                <label className="form-label">Meal Preference</label>
                <select className="form-select">
                  <option value="standard">Standard</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="halal">Halal</option>
                  <option value="special">Special Meal</option>
                </select>
              </div>
              <div className="col-12">
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexibleDates" />
                  <label className="form-check-label" htmlFor="flexibleDates">My travel dates are flexible</label>
                </div>
              </div>

              {/* Contact Details */}
              <div className="col-12 mt-4">
                <h6 className="form-section-title">4. Contact Details</h6>
              </div>
              <div className="col-md-4">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your full name" required />
              </div>
              <div className="col-md-4">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" placeholder="+971 50 XXXXXXX" required />
              </div>
              <div className="col-md-4">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="your@email.com" required />
              </div>

              <div className="col-12 mt-3">
                <label className="form-label">Special Requests / Notes</label>
                <textarea className="form-control" rows="3" placeholder="e.g. Wheelchair assistance, seat preference, urgent ticket..."></textarea>
              </div>

              <div className="col-12 mt-4">
                <div className="form-check visa-check p-3 rounded">
                  <input className="form-check-input ms-0 me-2" type="checkbox" id="visaAssistanceFlight" />
                  <label className="form-check-label fw-bold" htmlFor="visaAssistanceFlight">
                    I want visa assistance as well 👀
                  </label>
                </div>
              </div>

              <div className="col-12 mt-5 text-center">
                <p className="text-primary fw-bold mb-2">Get instant quote within 15 minutes</p>
                <button type="submit" className="primary-btn2 w-100 py-3 fs-5">
                  Request Quote <i className="bi bi-send-fill ms-2" />
                </button>
                <div className="mt-3">
                    <a href="https://wa.me/yournumber" className="whatsapp-btn">
                        <i className="bi bi-whatsapp me-2" /> Chat with an Expert on WhatsApp
                    </a>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <form className="hotel-inquiry-form">
            <div className="row g-4">
              {/* Stay Details */}
              <div className="col-12 mb-2">
                <h6 className="form-section-title">1. Stay Details</h6>
              </div>
              <div className="col-md-6 col-lg-4">
                <label className="form-label">Destination</label>
                <div className="input-with-icon">
                  <i className="bi bi-geo-alt" />
                  <input type="text" className="form-control" placeholder="City or Country" required />
                </div>
              </div>
              <div className="col-md-3 col-lg-4">
                <label className="form-label">Check-in Date</label>
                <input type="date" className="form-control" required />
              </div>
              <div className="col-md-3 col-lg-4">
                <label className="form-label">Check-out Date</label>
                <input type="date" className="form-control" required />
              </div>

              {/* Guests */}
              <div className="col-12 mt-4">
                <h6 className="form-section-title">2. Guests Information</h6>
              </div>
              <div className="col-md-4">
                <label className="form-label">Rooms Required</label>
                <input type="number" className="form-control" min="1" defaultValue="1" required />
              </div>
              <div className="col-md-4">
                <label className="form-label">Adults</label>
                <input type="number" className="form-control" min="1" defaultValue="1" required />
              </div>
              <div className="col-md-4">
                <label className="form-label">Children</label>
                <input type="number" className="form-control" min="0" defaultValue="0" />
              </div>

              {/* Hotel Preferences */}
              <div className="col-12 mt-4">
                <h6 className="form-section-title">3. Hotel Preferences</h6>
              </div>
              <div className="col-md-6 col-lg-3">
                <label className="form-label">Star Rating</label>
                <select className="form-select">
                  <option value="3-star">3⭐ Standard</option>
                  <option value="4-star">4⭐ First Class</option>
                  <option value="5-star">5⭐ Luxury</option>
                  <option value="luxury-resort">Luxury Resort</option>
                </select>
              </div>
              <div className="col-md-6 col-lg-3">
                <label className="form-label">Budget Range (Per Night)</label>
                <input type="text" className="form-control" placeholder="e.g. $100 - $200" />
              </div>
              <div className="col-md-6 col-lg-3">
                <label className="form-label">Meal Plan</label>
                <select className="form-select">
                  <option value="room-only">Room Only</option>
                  <option value="breakfast">Breakfast Included</option>
                  <option value="half-board">Half Board</option>
                  <option value="full-board">Full Board</option>
                </select>
              </div>
              <div className="col-md-6 col-lg-3">
                <label className="form-label">Room Type</label>
                <select className="form-select">
                  <option value="standard">Standard Room</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="suite">Suite</option>
                  <option value="family">Family Room</option>
                </select>
              </div>

              {/* Extra Preferences */}
              <div className="col-12 mt-4">
                <h6 className="form-section-title">4. Extra Preferences</h6>
              </div>
              <div className="col-md-6">
                <label className="form-label">Location Preference</label>
                <select className="form-select">
                  <option value="city-center">City Center</option>
                  <option value="near-haram">Near Haram (Saudi Arabia)</option>
                  <option value="beach-view">Beach / Sea View</option>
                  <option value="near-airport">Near Airport</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label d-block mb-3">Amenities Required</label>
                <div className="d-flex flex-wrap gap-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="wifi" />
                    <label className="form-check-label" htmlFor="wifi">Free WiFi</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="pool" />
                    <label className="form-check-label" htmlFor="pool">Pool</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gym" />
                    <label className="form-check-label" htmlFor="gym">Gym</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="parking" />
                    <label className="form-check-label" htmlFor="parking">Parking</label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Airport Pickup Required?</label>
                <select className="form-select">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {/* Contact Details */}
              <div className="col-12 mt-4">
                <h6 className="form-section-title">5. Contact Details</h6>
              </div>
              <div className="col-md-4">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your full name" required />
              </div>
              <div className="col-md-4">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" placeholder="+971 50 XXXXXXX" required />
              </div>
              <div className="col-md-4">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="your@email.com" required />
              </div>

              <div className="col-12 mt-3">
                <label className="form-label">Special Requests / Notes</label>
                <textarea className="form-control" rows="3" placeholder="e.g. Early check-in, honeymoon setup, connecting rooms..."></textarea>
              </div>

              <div className="col-12 mt-4">
                <div className="form-check visa-check p-3 rounded">
                  <input className="form-check-input ms-0 me-2" type="checkbox" id="visaAssistanceHotel" />
                  <label className="form-check-label fw-bold" htmlFor="visaAssistanceHotel">
                    I want visa assistance as well 👀
                  </label>
                </div>
              </div>

              <div className="col-12 mt-5 text-center">
                <p className="text-primary fw-bold mb-2">Check availability & Get instant response</p>
                <button type="submit" className="primary-btn2 w-100 py-3 fs-5">
                  Request Booking <i className="bi bi-calendar-check-fill ms-2" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      <style jsx>{`
        .inquiry-form-wrapper {
          border-radius: 20px;
          overflow: hidden;
        }
        .form-tabs {
          background: #f8f9fa;
          border-radius: 20px 20px 0 0;
          padding: 10px 10px 0;
        }
        .tab-btn {
          border: none;
          background: transparent;
          padding: 15px 30px;
          font-weight: 600;
          color: #666;
          border-radius: 12px 12px 0 0;
          transition: all 0.3s ease;
          flex: 1;
        }
        .tab-btn.active {
          background: #fff;
          color: var(--primary-color1, #2d3134);
          box-shadow: 0 -5px 15px rgba(0,0,0,0.05);
        }
        .form-content-box {
          background: #fff;
          border-radius: 0 0 20px 20px;
        }
        .form-section-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #333;
          border-bottom: 2px solid #eee;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .form-label {
          font-weight: 600;
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 8px;
        }
        .form-control, .form-select {
          padding: 12px 15px;
          border-radius: 10px;
          border: 1px solid #ddd;
          background-color: #fcfcfc;
        }
        .form-control:focus, .form-select:focus {
          border-color: var(--primary-color1, #2d3134);
          box-shadow: 0 0 0 0.2rem rgba(0,0,0,0.05);
          background-color: #fff;
        }
        .input-with-icon {
          position: relative;
        }
        .input-with-icon i {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #aaa;
          z-index: 5;
        }
        .input-with-icon input {
          padding-left: 40px;
        }
        .custom-radio .form-check-input:checked {
          background-color: var(--primary-color1, #2d3134);
          border-color: var(--primary-color1, #2d3134);
        }
        .visa-check {
          background: #fff9e6;
          border: 1px dashed #ffd700;
        }
        .whatsapp-btn {
            display: inline-block;
            background: #25D366;
            color: #fff;
            padding: 10px 25px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            margin-top: 10px;
            transition: transform 0.3s ease;
        }
        .whatsapp-btn:hover {
            transform: scale(1.05);
            color: #fff;
        }
        @media (max-width: 768px) {
          .tab-btn {
            padding: 12px 15px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TicketInquiryForm;

"use client"
import QuantityCounter from '@/uitils/QuantityCounter'
import React, { useMemo, useState, useEffect } from 'react'
import DestinationSearch from './DestinationSearch'
import TourTypeDropdown from './TourTypeDropdown'
import WhenDropdown from './WhenDropdown'
import TourCategoryDropdown from './TourCategoryDropdown'
import GuestDropdown from './GuestDropdown'
import DateRange from './DateRange'
import PackageDatePicker from './PackageDatePicker'
import TourIcon from '../icons/TourIcon'
import HotelIcon from '../icons/HotelIcon'
import VisaIcon from '../icons/VisaIcon'
import HajjIcon from '../icons/HajjIcon'
import UmrahIcon from '../icons/UmrahIcon'
import LocationIcon from '../icons/LocationIcon'
import CalendarIcon from '../icons/CalendarIcon'
import ClockIcon from '../icons/ClockIcon'
import RoomIcon from '../icons/RoomIcon'
import GuestIcon from '../icons/GuestIcon'
import umrahData from '@/data/umrah.json'
import hajjData from '@/data/hajj.json'

const BookingForm = () => {
  // Get all Hajj packages with their titles
  const hajjPackages = useMemo(() => {
    return hajjData.hajjPackages || []
  }, [])

  // Get all Umrah packages (combine air and bus)
  const umrahPackages = useMemo(() => {
    const allPackages = [
      ...(umrahData.umrahByAir || []),
      ...(umrahData.umrahByBus || [])
    ]
    return allPackages
  }, [])

  // Get Hajj package titles for dropdown
  const hajjPackageTitles = useMemo(() => {
    return hajjPackages.map(pkg => pkg.title || '')
  }, [hajjPackages])

  // Get Umrah package titles for dropdown
  const umrahPackageTitles = useMemo(() => {
    return umrahPackages.map(pkg => pkg.title || '')
  }, [umrahPackages])

  // State for selected packages - default to first package
  const [selectedHajjPackage, setSelectedHajjPackage] = useState(
    hajjPackageTitles.length > 0 ? hajjPackageTitles[0] : null
  )
  const [selectedUmrahPackage, setSelectedUmrahPackage] = useState(
    umrahPackageTitles.length > 0 ? umrahPackageTitles[0] : null
  )

  // Get selected Hajj package details
  const selectedHajjDetails = useMemo(() => {
    if (!selectedHajjPackage) return hajjPackages[0] || null
    return hajjPackages.find(pkg => pkg.title === selectedHajjPackage) || hajjPackages[0] || null
  }, [selectedHajjPackage, hajjPackages])

  // Get selected Umrah package details
  const selectedUmrahDetails = useMemo(() => {
    if (!selectedUmrahPackage) return umrahPackages[0] || null
    return umrahPackages.find(pkg => pkg.title === selectedUmrahPackage) || umrahPackages[0] || null
  }, [selectedUmrahPackage, umrahPackages])

  // Extract duration from batch field
  const getDuration = (batch) => {
    if (!batch) return ''
    const match = batch.match(/(\d+)\s*Days/)
    return match ? `${match[1]} Days` : ''
  }

  // Extract package type from title
  const getPackageType = (title, type) => {
    if (!title) return ''
    if (type) {
      // For Umrah, combine package name with type (air/bus)
      const match = title.match(/^(\w+)\s+Umrah/)
      if (match) {
        return `${match[1]} ${type.charAt(0).toUpperCase() + type.slice(1)}`
      }
    } else {
      // For Hajj, extract type from title or use type field
      const match = title.match(/^(\w+)\s+Hajj/)
      if (match) {
        return match[1]
      }
    }
    return title.split(' ')[0] || ''
  }

  // Fix Safari zoom issue by ensuring all inputs have font-size >= 16px
  useEffect(() => {
    const styleId = 'booking-form-safari-zoom-fix'
    if (document.getElementById(styleId)) return

    const style = document.createElement('style')
    style.id = styleId
    style.textContent = `
      .home1-banner-bottom input[type="text"],
      .home1-banner-bottom input[type="date"],
      .home1-banner-bottom input[type="number"],
      .home1-banner-bottom .react-datepicker__input-container input {
        font-size: 16px !important;
      }
      .home1-banner-bottom .custom-select-search-area input {
        font-size: 16px !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      const existingStyle = document.getElementById(styleId)
      if (existingStyle) {
        existingStyle.remove()
      }
    }
  }, [])

  return (
    <div className="home1-banner-bottom mb-120">
      <div className="container-fluid">
        <div className="filter-wrapper">
          <div className="nav-buttons">
            <ul className="nav nav-pills" id="pills-tab2" role="tablist">
              <li className="nav-item" role="presentation">
                <button 
                  className="nav-link active" 
                  id="hajj-tab" 
                  data-bs-toggle="pill" 
                  data-bs-target="#hajj" 
                  type="button" 
                  role="tab" 
                  aria-controls="hajj" 
                  aria-selected="true"
                >
                  <HajjIcon />
                  Hajj
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  className="nav-link" 
                  id="umrah-tab" 
                  data-bs-toggle="pill" 
                  data-bs-target="#umrah" 
                  type="button" 
                  role="tab" 
                  aria-controls="umrah" 
                  aria-selected="false"
                >
                  <UmrahIcon />
                  Umrah
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  className="nav-link" 
                  id="tour-tab" 
                  data-bs-toggle="pill" 
                  data-bs-target="#tour" 
                  type="button" 
                  role="tab" 
                  aria-controls="tour" 
                  aria-selected="false"
                >
                  <TourIcon />
                  Tour
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  className="nav-link" 
                  id="visa-tab" 
                  data-bs-toggle="pill" 
                  data-bs-target="#visa" 
                  type="button" 
                  role="tab" 
                  aria-controls="visa" 
                  aria-selected="false"
                >
                  <VisaIcon />
                  Visa
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  className="nav-link" 
                  id="hotel-tab" 
                  data-bs-toggle="pill" 
                  data-bs-target="#hotel" 
                  type="button" 
                  role="tab" 
                  aria-controls="hotel" 
                  aria-selected="false"
                >
                  <HotelIcon />
                  Hotel
                </button>
              </li>
            </ul>
          </div>
          <div className="filter-group">
            <div className="tab-content" id="pills-tab2Content">
              {/* Hajj Tab */}
              <div className="tab-pane fade show active" id="hajj" role="tabpanel">
                <form>
                  <div className="filter-area">
                    <div className="row g-xl-4 gy-4">
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <ClockIcon width={27} height={27} />
                          </div>
                          <TourCategoryDropdown 
                            data={hajjPackageTitles.length > 0 ? hajjPackageTitles : []} 
                            labelType="Select Package"
                            onSelect={(title) => setSelectedHajjPackage(title)}
                            defaultValue={selectedHajjPackage || (hajjPackageTitles.length > 0 ? hajjPackageTitles[0] : "")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <CalendarIcon width={23} height={23} />
                          </div>
                          <PackageDatePicker 
                            label="Departure Date" 
                            availableDates={selectedHajjDetails?.departureDates || (hajjPackages[0]?.departureDates || [])}
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <ClockIcon width={27} height={27} />
                          </div>
                          <div className="searchbox-input">
                            <label>Duration</label>
                            <div className="custom-select-dropdown">
                              <div className="select-input">
                                <input 
                                  type="text" 
                                  readOnly 
                                  value={selectedHajjDetails ? getDuration(selectedHajjDetails.batch) : (hajjPackages[0] ? getDuration(hajjPackages[0].batch) : '')} 
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                        <div className="single-search-box">
                          <div className="icon">
                            <GuestIcon width={27} height={27} />
                          </div>
                          <div className="searchbox-input">
                            <label>Pilgrims</label>
                            <QuantityCounter />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn-primary">Book Hajj Package</button>
                </form>
              </div>

              {/* Umrah Tab */}
              <div className="tab-pane fade" id="umrah" role="tabpanel">
                <form>
                  <div className="filter-area">
                    <div className="row g-xl-4 gy-4">
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <ClockIcon width={27} height={27} />
                          </div>
                          <TourCategoryDropdown 
                            data={umrahPackageTitles.length > 0 ? umrahPackageTitles : []} 
                            labelType="Select Package"
                            onSelect={(title) => setSelectedUmrahPackage(title)}
                            defaultValue={selectedUmrahPackage || (umrahPackageTitles.length > 0 ? umrahPackageTitles[0] : "")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <CalendarIcon width={23} height={23} />
                          </div>
                          <PackageDatePicker 
                            label="Departure Date" 
                            availableDates={selectedUmrahDetails?.departureDates || (umrahPackages[0]?.departureDates || [])}
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <ClockIcon width={27} height={27} />
                          </div>
                          <div className="searchbox-input">
                            <label>Duration</label>
                            <div className="custom-select-dropdown">
                              <div className="select-input">
                                <input 
                                  type="text" 
                                  readOnly 
                                  value={selectedUmrahDetails ? getDuration(selectedUmrahDetails.batch) : (umrahPackages[0] ? getDuration(umrahPackages[0].batch) : '')} 
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                        <div className="single-search-box">
                          <div className="icon">
                            <GuestIcon width={27} height={27} />
                          </div>
                          <div className="searchbox-input">
                            <label>Pilgrims</label>
                            <QuantityCounter />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn-primary">Book Umrah Package</button>
                </form>
              </div>

              {/* Tour Tab */}
              <div className="tab-pane fade" id="tour" role="tabpanel">
                <form>
                  <div className="filter-area">
                    <div className="row g-xl-4 gy-4">
                      <div className="col-xl-3 col-sm-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <LocationIcon width={27} height={27} />
                          </div>
                          <DestinationSearch destination="Destination" />
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <ClockIcon width={27} height={27} />
                          </div>
                          <TourTypeDropdown />
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <CalendarIcon width={27} height={27} />
                          </div>
                          <WhenDropdown />
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6 d-flex justify-content-center">
                        <div className="single-search-box">
                          <div className="icon">
                            <ClockIcon width={27} height={27} />
                          </div>
                          <TourCategoryDropdown 
                            data={['Economy', 'Luxury', 'Deluxe', 'Premium']} 
                            labelType="Tour Category"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn-primary">Search Tours</button>
                </form>
              </div>

              {/* Visa Tab */}
              <div className="tab-pane fade" id="visa" role="tabpanel">
                <form>
                  <div className="filter-area">
                    <div className="row g-xl-4 gy-4">
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <LocationIcon width={27} height={27} />
                          </div>
                          <DestinationSearch destination="Destination Country" />
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <ClockIcon width={27} height={27} />
                          </div>
                          <TourCategoryDropdown 
                            data={["Tourist", "Medical", "Diplomat", "Business", "Transit"]} 
                            labelType="Visa Type"
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <CalendarIcon width={23} height={23} />
                          </div>
                          <TourCategoryDropdown 
                            data={["Bangladeshi", "Indian", "Pakistani", "Brazilian", "Australian", "American", "British"]} 
                            labelType="Nationality" 
                          />
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                        <div className="single-search-box">
                          <div className="icon">
                            <GuestIcon width={27} height={27} />
                          </div>
                          <div className="searchbox-input">
                            <label>Travelers</label>
                            <QuantityCounter />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn-primary">Apply for Visa</button>
                </form>
              </div>

              {/* Hotel Tab */}
              <div className="tab-pane fade" id="hotel" role="tabpanel">
                <form>
                  <div className="filter-area">
                    <div className="row g-xl-4 gy-4">
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <LocationIcon width={27} height={27} />
                          </div>
                          <DestinationSearch destination="Location" />
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <CalendarIcon width={23} height={23} />
                          </div>
                          <DateRange label="Check in - Check out" />
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center divider">
                        <div className="single-search-box">
                          <div className="icon">
                            <RoomIcon width={24} height={24} />
                          </div>
                          <div className="searchbox-input">
                            <label>Rooms</label>
                            <QuantityCounter />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                        <div className="single-search-box">
                          <div className="icon">
                            <GuestIcon width={27} height={27} />
                          </div>
                          <GuestDropdown />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn-primary">Search Hotels</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingForm

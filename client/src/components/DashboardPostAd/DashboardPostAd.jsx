import React, { useEffect, useState } from 'react'
import DashboardPostAdCss from './DashboardPostAd.module.scss'
// Components
import BoxModel from '../boxModel/boxModel'
import Button from '../button/button'
import { API, fetchBackend } from '../../services/config.js'
import { toast } from 'react-toastify'
import { useHistory, withRouter } from 'react-router-dom'
import { uploadImages } from '../../redux/user/user.actions.js'
const DashboardPostAd = ({ location }) => {
  const [images, setimages] = useState({ files: [], blobs: [] })
  const history = useHistory()
  let initialState = {
    id: '',
    price: '355',
    exterior_color: 'Whtie',
    reg_city: 'Lahore',
    engine_type: 'Any',
    engine_capacity: '343',
    transmission: 'Automatic',
    assembly: '34',
    body_type: 'Coupe',
    make: 'Fiat',
    abs: true,
    airbags: true,
    am_fm: true,
    ac: true,
    power_mirrors: true,
    power_steering: true,
    cd_player: true,
    cassete: true,
    immobilizer: true,
    power_locks: true,
    nav_system: true,
    phone: '+92 324 8205435',
    secondar_phone: '+92 324 8205435',
    city: 'Lahore',
    car_info: '2019 Fiat 124 Spider',
    model: '2019',
    mileage_km: '20',
    photos: [],
    description:
      "This is the Photoshop's version of Lorem Ipsum. Proin gravida nibh\n    vel velit auctor aliqut. Aenea solicitun, lorem qus bibendum\n    autos, nisi elit consquatl ipsum.Proin gravida nibh vel velit\n    auctor aliqut. Aenea solicitun, lorem qus bibendum autos, nisi\n    elit consquatl ipsum .Proin gravida nibh vel velit auctor aliqut.\n    Aenea solicitun, lorem qus bibendum autos, nisi elit consquatl\n    ipsum .Proin gravida nibh vel velit auctor aliqut. Aenea\n    solicitun, lorem qus bibendum autos, nisi elit consquatl ipsum\n    .Proin gravida nibh vel velit auctor aliqut. Aenea solicitun,\n    lorem qus bibendum autos, nisi elit consquatl ipsum",
    transaction_type: 'cash',
  }
  const [state, setState] = useState(initialState)
  const [edit, setedit] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    let payload = {
      id: state.id,
      selling: {
        price: state.price,
        transaction_type: state.transaction_type,
      },
      details: {
        exterior_color: state.exterior_color,
        reg_city: state.reg_city,
        engine_type: state.engine_type,
        engine_capacity: state.engine_capacity,
        transmission: state.transmission,
        assembly: state.assembly,
        body_type: state.body_type,
        make: state.make,
      },
      features: {
        abs: state.abs,
        airbags: state.airbags,
        am_fm: state.am_fm,
        ac: state.ac,
        power_mirrors: state.power_mirrors,
        power_steering: state.power_steering,
        cd_player: state.cd_player,
        cassete: state.cassete,
        immobilizer: state.immobilizer,
        power_locks: state.power_locks,
        nav_system: state.nav_system,
      },
      contact_info: {
        phone: state.phone,
        secondar_phone: state.secondar_phone,
      },
      city: state.city,
      car_info: state.car_info,
      model: state.model,
      mileage_km: state.mileage_km,
      photos: images.files,
      description: state.description,
      photos: state.photos,
    }
    uploadImages({ payload: images.files }).then((data) => {
      fetchBackend(edit ? 'PUT' : 'POST', API.postAd, {
        ...payload,
        photos: payload.photos.concat(data),
      })
        .then((res) => {
          toast.success(edit ? 'Edit Successfully' : 'Posted Successfully')
          history.push('/dashboard/listing')
        })
        .catch((er) => toast.error(er.message))
    })
  }
  useEffect(() => {
    if (location.edit && location.product_id) {
      setedit(true)
      fetchBackend('GET', API.getAd + `${location.product_id}`)
        .then((res) =>
          setState({
            id: res._id,
            price: res.selling.price,
            exterior_color: res.details.exterior_color,
            reg_city: res.details.reg_city,
            engine_type: res.details.engine_type,
            engine_capacity: res.details.engine_capacity,
            transmission: res.details.transmission,
            assembly: res.details.assembly,
            body_type: res.details.body_type,
            make: res.details.make,
            abs: res.features.abs,
            airbags: res.features.airbags,
            am_fm: res.features.am_fm,
            ac: res.features.ac,
            power_mirrors: res.features.power_mirrors,
            power_steering: res.features.power_steering,
            cd_player: res.features.cd_player,
            cassete: res.features.cassete,
            immobilizer: res.features.immobilizer,
            power_locks: res.features.power_locks,
            nav_system: res.features.nav_system,
            phone: res.contact_info.phone,
            secondar_phone: res.contact_info.secondar_phone,
            city: res.city,
            car_info: res.car_info,
            model: res.model,
            mileage_km: res.mileage_km,
            photos: res.photos,
            description: res.description,
            transaction_type: res.selling.transaction_type,
          })
        )
        .catch((err) => toast.error(err.message))
    }
  }, [location])
  const handleImages = (e) => {
    let files = Array.from(e.target.files)

    let bbs = files.map((file) => URL.createObjectURL(file))
    const mergedFiles = files.concat(images.files)
    const mergedBlobs = bbs.concat(images.blobs)
    setimages({
      blobs: mergedBlobs,
      files: mergedFiles,
    })
  }
  const handleImageRemove = (key, index) => {
    let blobs = images.blobs
    let files = images.files
    let photos = state.photos
    console.log(key, index)
    if (key === 'blob') {
      blobs.splice(index, 1)
      files.splice(index, 1)
      setimages({
        blobs,
        files,
      })
    }
    if (key === 'state') {
      photos.splice(index, 1)
      setState({ ...state, photos })
    }
  }
  // console.log(images)
  return (
    <div className={DashboardPostAdCss.boxmodel}>
      <BoxModel title={edit ? 'EDIT AD' : 'POST AD'}>
        <div className={DashboardPostAdCss.body}>
          <form onSubmit={handleSubmit}>
            <h3>Car Information</h3>
            <p>
              (All feilds marked with <span>*</span> are mandatory)
            </p>
            <div className={DashboardPostAdCss.form}>
              <div className={DashboardPostAdCss.row}>
                <label>
                  CITY<span>*</span>
                </label>
                {/* <select name="cars" id="city">
                  <option value="volvo">ANY</option>
                  <option value="saab">Female</option>
                  <option value="opel">Other</option>
                </select> */}
                <input
                  type="text"
                  placeholder="New York"
                  value={state.city}
                  onChange={(e) => setState({ ...state, city: e.target.value })}
                />
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  CAR INFO<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Make/Version/Title"
                  value={state.car_info}
                  onChange={(e) =>
                    setState({ ...state, car_info: e.target.value })
                  }
                />
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  MODEL <span>*</span>
                </label>
                <select
                  name="cars"
                  id="city"
                  value={state.model}
                  onChange={(e) =>
                    setState({ ...state, model: e.target.value })
                  }
                >
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  MILEAGE<span>*</span> (KM)
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  value={state.mileage_km}
                  onChange={(e) =>
                    setState({ ...state, mileage_km: e.target.value })
                  }
                />
              </div>

              <div className={DashboardPostAdCss.row}>
                <label>
                  DESCRIPTION<span>*</span>
                </label>
                <input
                  type="textarea"
                  placeholder="Describe your car ...."
                  value={state.description}
                  onChange={(e) =>
                    setState({ ...state, description: e.target.value })
                  }
                />
              </div>
              <hr />
            </div>
            <h3>Expected Selling Price</h3>
            <div className={DashboardPostAdCss.form}>
              <div className={DashboardPostAdCss.row}>
                <div className={DashboardPostAdCss.radio}>
                  <label>
                    TRANSACTION TYPE<span>*</span>
                  </label>
                  <input
                    type="radio"
                    name="leased"
                    checked={state.transaction_type === 'cash'}
                    onChange={(e) =>
                      setState({ ...state, transaction_type: 'cash' })
                    }
                  />
                  <span>Cash</span>
                  <input
                    type="radio"
                    name="cash"
                    checked={state.transaction_type === 'leased'}
                    onChange={(e) =>
                      setState({ ...state, transaction_type: 'leased' })
                    }
                  />
                  <span>Leased</span>
                </div>
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  PRICE <span>*</span>($)
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  value={state.price}
                  onChange={(e) =>
                    setState({ ...state, price: e.target.value })
                  }
                />
              </div>
              <hr />
            </div>
            <h3>Upload Photos</h3>
            <div className={DashboardPostAdCss.form}>
              <div
                className={`${DashboardPostAdCss.row} ${DashboardPostAdCss.uploadrow}`}
              >
                <div className={DashboardPostAdCss.upload}>
                  <div className={DashboardPostAdCss.uploadphoto}>
                    <label for="file-input">
                      <img alt="" src="images/addphoto.png" />
                    </label>
                    <input
                      id="file-input"
                      type="file"
                      multiple
                      // max={2}
                      onChange={(e) => handleImages(e)}
                    />
                    <span> (Max Limit 5MB Per Image)</span>
                  </div>
                  <div className={DashboardPostAdCss.uploadedphotos}>
                    <ul>
                      {images.blobs.map((blob, idx) => (
                        <li>
                          <div className={DashboardPostAdCss.subimg1}>
                            <img alt="" src={blob} />
                            <i
                              className="fa fa-close"
                              onClick={() => handleImageRemove('blob', idx)}
                            />
                          </div>
                        </li>
                      ))}
                      {state.photos.map((photo, idx) => (
                        <li>
                          <div className={DashboardPostAdCss.subimg1}>
                            <img alt="" src={photo} />
                            <i
                              className="fa fa-close"
                              onClick={() => handleImageRemove('state', idx)}
                            />
                          </div>
                        </li>
                      ))}
                      {/* <li>
                        <div className={DashboardPostAdCss.subimg1}>
                          <img alt="" src="images\subimg2.jpg" />
                        </div>
                      </li>
                      <li>
                        <div className={DashboardPostAdCss.subimg1}>
                          <img alt="" src="images\subimg3.jpg" />
                        </div>
                      </li> */}
                    </ul>
                  </div>
                  <ul>
                    <li>
                      Photos Should Be In "Jpeg, Jpg, Png, Gif" Format Only.
                    </li>
                    <li>
                      Adding At Least8 Pictures Improves The Chance For A Quick
                      Sale.
                    </li>
                    <li>
                      Adding Clear Front, Back And Interior Pictures Of Your Car
                      Increases The Quality Of Your Ad And Gets You Noticed More
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
            </div>
            <h3>Additional Information</h3>
            <div className={DashboardPostAdCss.form}>
              <div className={DashboardPostAdCss.row}>
                <label>
                  EXTERIOR COLOR<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  value={state.exterior_color}
                  onChange={(e) =>
                    setState({ ...state, exterior_color: e.target.value })
                  }
                />
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  REGISTRATION CITY<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  value={state.reg_city}
                  onChange={(e) =>
                    setState({ ...state, reg_city: e.target.value })
                  }
                />
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  ENGINE TYPE<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  value={state.engine_type}
                  onChange={(e) =>
                    setState({ ...state, engine_type: e.target.value })
                  }
                />
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  ENGINE CAPACITY<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  value={state.engine_capacity}
                  onChange={(e) =>
                    setState({ ...state, engine_capacity: e.target.value })
                  }
                />{' '}
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  TRANSMISSION<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  value={state.transmission}
                  onChange={(e) =>
                    setState({ ...state, transmission: e.target.value })
                  }
                />
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  ASSEMBLY<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  value={state.assembly}
                  onChange={(e) =>
                    setState({ ...state, assembly: e.target.value })
                  }
                />
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  Body Type<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  value={state.body_type}
                  onChange={(e) =>
                    setState({ ...state, body_type: e.target.value })
                  }
                />
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>
                  Make<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  value={state.make}
                  onChange={(e) => setState({ ...state, make: e.target.value })}
                />
              </div>
              <div className={DashboardPostAdCss.row}>
                <table>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={state.abs}
                        onChange={(e) =>
                          setState({ ...state, abs: e.target.checked })
                        }
                      />
                      <lablel>ABS</lablel>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={state.airbags}
                        onChange={(e) =>
                          setState({ ...state, airbags: e.target.checked })
                        }
                      />
                      <lablel>Airbags</lablel>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={state.am_fm}
                        onChange={(e) =>
                          setState({ ...state, am_fm: e.target.checked })
                        }
                      />
                      <lablel>AM/FM</lablel>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={state.ac}
                        onChange={(e) =>
                          setState({ ...state, ac: e.target.checked })
                        }
                      />
                      <lablel>Air Conditioned</lablel>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={state.power_mirrors}
                        onChange={(e) =>
                          setState({
                            ...state,
                            power_mirrors: e.target.checked,
                          })
                        }
                      />
                      <lablel>Power Mirrors</lablel>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={state.power_steering}
                        onChange={(e) =>
                          setState({
                            ...state,
                            power_steering: e.target.checked,
                          })
                        }
                      />
                      <lablel>Poower Steering</lablel>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={state.cd_player}
                        onChange={(e) =>
                          setState({ ...state, cd_player: e.target.checked })
                        }
                      />
                      <lablel>CD Player</lablel>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={state.cassete}
                        onChange={(e) =>
                          setState({ ...state, cassete: e.target.checked })
                        }
                      />
                      <lablel>Cassete</lablel>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={state.immobilizer}
                        onChange={(e) =>
                          setState({ ...state, immobilizer: e.target.checked })
                        }
                      />
                      <lablel>Immobilizer Key</lablel>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={state.power_locks}
                        onChange={(e) =>
                          setState({ ...state, power_locks: e.target.checked })
                        }
                      />
                      <lablel>Power Locks</lablel>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={state.nav_system}
                        onChange={(e) =>
                          setState({ ...state, nav_system: e.target.checked })
                        }
                      />
                      <lablel>Navigation System</lablel>
                    </td>
                  </tr>
                </table>
              </div>
              <hr />
            </div>
            <h3>Contact Information</h3>
            <div className={DashboardPostAdCss.form}>
              <div className={DashboardPostAdCss.row}>
                <p>
                  Enter a gunuine XX digit mobile no. with format <br />
                  XXXXXXXXXXX. All inquires will come on this number.
                </p>
                <label>
                  MOBILE NUMBER<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Mobile No"
                  value={state.phone}
                  onChange={(e) =>
                    setState({ ...state, phone: e.target.value })
                  }
                />
              </div>
              <div className={DashboardPostAdCss.row}>
                <label>SECONDARY MOBILE NUMBER (OPTIONAL) </label>
                <input
                  type="text"
                  placeholder="Mobile No"
                  value={state.secondar_phone}
                  onChange={(e) =>
                    setState({ ...state, secondar_phone: e.target.value })
                  }
                />
                <Button type="submit">SUBMIT & CONTINUE</Button>
              </div>
            </div>
          </form>
        </div>
      </BoxModel>
    </div>
  )
}

export default withRouter(DashboardPostAd)

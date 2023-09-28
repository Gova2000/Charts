// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinebyCoverage from '../VaccinationCoverage'
import VaccinebyGender from '../VaccinationByGender'
import VaccinebyAge from '../VaccinationByAge'
import './index.css'

const content = {
  success: 'success',
  failure: 'failure',
  progress: 'progress',
}

class CowinDashboard extends Component {
  state = {
    vaccineList: [],
    GenderVaccine: [],
    AgeVaccine: [],

    key: '',
  }

  componentDidMount() {
    this.GetFetch()
  }

  GetFetch = async () => {
    this.setState({key: content.progress})
    const get1 = await fetch('https://apis.ccbp.in/covid-vaccination-data')

    if (get1.ok === true) {
      const data = await get1.json()

      const format = {
        last7Days: data.last_7_days_vaccination,
        getbyAge: data.vaccination_by_age,
        getbyGender: data.vaccination_by_gender,
      }

      const update = format.last7Days.map(each => ({
        vaccineDate: each.vaccine_date,
        dose1: each.dose_1,
        dose2: each.dose_2,
      }))

      this.setState({
        vaccineList: update,
        GenderVaccine: format.getbyGender,
        AgeVaccine: format.getbyAge,

        key: content.success,
      })
    } else {
      this.setState({key: content.failure})
    }
  }

  get = () => {
    const {vaccineList, GenderVaccine, AgeVaccine} = this.state
    console.log(GenderVaccine, AgeVaccine)
    return (
      <div className="mbg1">
        <div className="row">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1 className="h1">Co-Win</h1>
        </div>
        <h1>Cowin Vaccination in India</h1>

        <VaccinebyCoverage vaccineList={vaccineList} />
        <VaccinebyGender GenderVaccine={GenderVaccine} />
        <VaccinebyAge AgeVaccine={AgeVaccine} />
      </div>
    )
  }

  progress = () => (
    <div className="mbg1">
      <div className="row">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          alt="website logo"
        />
        <h1 className="h1">Co-Win</h1>
      </div>
      <h1>Cowin Vaccination in India</h1>
      <div className="main" data-testid="loader">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </div>
    </div>
  )

  failureCase = () => (
    <div className="mbg1">
      <div className="row">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          alt="website logo"
        />
        <h1 className="h1">Co-Win</h1>
      </div>
      <h1>Cowin Vaccination in India</h1>
      <div className="mbg1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
          alt="failure view"
        />
        <h1> Something went wrong</h1>
      </div>
    </div>
  )

  render() {
    const {key} = this.state

    switch (key) {
      case content.success:
        return this.get()
      case content.progress:
        return this.progress()
      case content.failure:
        return this.failureCase()

      default:
        return null
    }
  }
}

export default CowinDashboard

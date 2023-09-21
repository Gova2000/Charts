// Write your code here
import {Component} from 'react'

import VaccinebyCoverage from '../VaccinationCoverage'
import VaccinebyAge from '../VaccinationByGender'
import VaccinebyGender from '../VaccinationByAge'
import './index.css'

class CowinDashboard extends Component {
  state = {vaccineList: [], GenderVaccine: [], AgeVaccine: []}

  componentDidMount() {
    this.GetFetch()
  }

  GetFetch = async () => {
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
      })
    }
  }

  get = () => {
    const {vaccineList, GenderVaccine, AgeVaccine} = this.state

    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1>Co-Win</h1>
        </div>
        <h1>Cowin Vaccination in India</h1>

        <VaccinebyCoverage vaccineList={vaccineList} />
        <VaccinebyGender GenderVaccine={GenderVaccine} />
        <VaccinebyAge AgeVaccine={AgeVaccine} />
      </div>
    )
  }

  render() {
    return <div>{this.get()}</div>
  }
}

export default CowinDashboard

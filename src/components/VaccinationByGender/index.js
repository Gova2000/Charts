// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinebyGender = props => {
  const {GenderVaccine} = props
  const {gender, count} = GenderVaccine

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={GenderVaccine}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        />
        <Cell name="male" fill="# #f54394" />
        <Cell name="female" fill="#5a8dee" />
        <Cell name="others" fill="#2cc6c6" />
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
export default VaccinebyGender

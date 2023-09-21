// Write your code here
import './index.css'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinebyAge = props => {
  const {AgeVaccine} = props
  const {count, age} = AgeVaccine
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={AgeVaccine}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="0%"
          dataKey="count"
        >
          <Cell name="male" fill="# #f54394" />
          <Cell name="female" fill="#5a8dee" />
          <Cell name="others" fill="#2cc6c6" />
        </Pie>
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

export default VaccinebyAge

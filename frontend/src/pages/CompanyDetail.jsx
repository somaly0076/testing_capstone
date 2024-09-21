import React from 'react'
import { useParams } from 'react-router-dom'
const CompanyDetail = () => {
const { company } = useParams()
  return (
    <div>{company}</div>
  )
}

export default CompanyDetail
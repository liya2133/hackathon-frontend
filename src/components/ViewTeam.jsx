import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewTeam = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-data").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <div className="container mt-4">
                <h2 className="text-center mb-4">
                    <b><i>View Teams</i></b>
                </h2>

                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Team ID</th>
                            <th>Team Name</th>
                            <th>Leader Name</th>
                            <th>Leader Email</th>
                            <th>Leader Phone</th>
                            <th>College Name</th>
                            <th>No. of Members</th>
                            <th>Project Title</th>
                            <th>Problem Statement</th>
                            <th>Technology Stack</th>
                            <th>Mentor Name</th>
                            <th>Registration Date</th>
                            <th>Table No.</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{value.Teamid}</td>
                                    <td>{value.Teamname}</td>
                                    <td>{value.Teamleadername}</td>
                                    <td>{value.Leaderemail}</td>
                                    <td>{value.Leaderphone}</td>
                                    <td>{value.Collegename}</td>
                                    <td>{value.Nomembers}</td>
                                    <td>{value.Projecttitle}</td>
                                    <td>{value.Problemstatement}</td>
                                    <td>{value.Technologystack}</td>
                                    <td>{value.Mentorname}</td>
                                    <td>{value.Regdate}</td>
                                    <td>{value.Tableno}</td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ViewTeam
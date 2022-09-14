import React from 'react';
import styles from './style.module.css';
import { Image } from 'antd';
import profilePicture from '../../assets/images/anya.png';

export default function MyProfile () {
    const data = [
        {
            name: "Anya Forger",
            birthdate: "Bumi, 29 Desember 2016",
            gender: "female",
            phonenumber: "+69420123321",
            emailaddress: "anya@forger.com" ,
            division: "manajemen",
            role: "programmer",
            salary: "Rp50.000.000,00/hour"
        }
    ]

    return (
        <div className="content">
            <div className={ styles.profileName }>
                <h1>Profil</h1>
                <h5>Anya Forger | Programmer</h5>
            </div>
            <div className={ styles.profileInfo }>
                <div className={ styles.profilePictureArea }>
                    <Image
                        className={ styles.profilePicture }
                        width={300}
                        src={ profilePicture }
                    />
                </div>
                <div className={ styles.profileDetail }>
                    <h4>Your Information</h4>
                    <table className={ styles.profileTable}>
                        {data.map((item, index) => {
                            return (
                                <tr>
                                    <tr>
                                        <td><b>Full Name     </b></td><td><b> : </b></td><td>{item.name}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Birth Date    </b></td><td><b> : </b></td><td>{item.birthdate}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Gender        </b></td><td><b> : </b></td><td>{item.gender}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Phone Number  </b></td><td><b> : </b></td><td>{item.phonenumber}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Email Address </b></td><td><b> : </b></td><td>{item.emailaddress}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Division      </b></td><td><b> : </b></td><td>{item.division}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Role          </b></td><td><b> : </b></td><td>{item.role}</td>
                                    </tr>
                                    <tr>
                                        <td><b>Salary        </b></td><td><b> : </b></td><td>{item.salary}</td>
                                    </tr>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import propType from 'prop-types'

const Profile = ({ fullName, bio, profession, children, handleName}) => {

    Profile.defaultProps = {
        fullName:"kehinde billions",  bio :'i am the richest man in Africa, i started my company with 1 naira ten years ago.', profession:'software developer', children:`<img src='./mypicture.jpg' width="400px" heigth='400px' alt='mypicture'/>`
    }

    Profile.propTypes = {
        fullName: propType.string, bio:propType.string, profession: propType.string, children: propType.string
    }
    return (
        <div>
            <h1>
                Fullname: {fullName}
                <br/>
                <br/>
                Bio: {bio}
                <br/>
                <br/>
                profession: {profession}
            </h1>
            {children}
            <br />
            <br/>
            {handleName}
        </div>
    )
}
export default Profile
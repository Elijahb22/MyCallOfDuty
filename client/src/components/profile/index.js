import React from 'react'
import Select from 'react-select';

const Profile = () => {
const rank = [
    { label: "Contender", value: 1 },
    { label: "Specialist", value: 2 },
    { label: "Advance", value: 3 },
    { label: "Expert", value: 4 },
    { label: "Elite", value: 5 },
    { label: "Master", value: 6 },
    { label: "Challenger", value: 7 },
    { label: "Top 250", value: 8 },
    { label: " Warzone", value: 9 }
]
return (
    <div>
        <div className="">
            <h2 className="">My  profile.</h2>
                <div>
                    <label>Bio:</label>
                    <input placeholder=''></input>
                </div>
                <div>
                    <label>Rank or Warzone: </label>
                    <Select placeholder="N/A" options={rank}></Select>
                </div>
            <button className="btn ">Add Friend</button>
        </div>
        <div className="flex-row justify-space-between">
            <div className="">
                Posts
            </div>
            <div className="">friends</div>
        </div>
    </div>
  );
}

export default Profile;
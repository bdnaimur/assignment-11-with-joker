import React, { useEffect, useState } from 'react';
import ShowOurteamDetails from './ShowOurTeamDetails/ShowOurteamDetails';

const ShowOurTeam = () => {
    const [allTeam, setAllTeam] = useState([] || 1)
    useEffect(() => {
        const url = `https://whispering-lowlands-13005.herokuapp.com/ourTeams`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllTeam(data)
            })
    }, [])
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <h3 className="text-secondary">Our Teams</h3>
                {allTeam.map(team =><ShowOurteamDetails team={team}></ShowOurteamDetails>)}
            </div>
            
        </div>
    );
};

export default ShowOurTeam;
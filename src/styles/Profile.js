import styled from 'styled-components';

export const ProfileContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;

    .profile-card {
        padding-top: 50px;
        width: 349px;
        height: 434px;
        background: var(--white);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.6px);
        -webkit-backdrop-filter: blur(7.6px);
        border: 10px solid var(--white);
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;        
        justify-content: flex-start;
    }

    a {
        text-decoration: none;
        color: var(--white);
        background-color: var(--blue);
        width:100px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        margin-top: 48px;
    }

    img {
        width: 120px;
        height: 120px;        
        margin-left: 8px;
        margin-right: 18px;   
    }

    h1, h2, p {
        color: var(--dark);
        margin-left: 14px;
    }

    h2 {
        font-size: 1.4em;
    }

    @media only screen and (max-width: 500px) { 
        margin-top: 40px;

        p {
            width: 300px;
        }
    }
`;

export default ProfileContainer;

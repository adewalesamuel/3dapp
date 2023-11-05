export default function LogoutBtn(props) {
    return (
        <span className="nav-link text-danger" onClick={props.handleLogoutClick} role='button'>
            <i className="icon ion-forward text-danger"></i> Se deconnecter
        </span>
    )   
}
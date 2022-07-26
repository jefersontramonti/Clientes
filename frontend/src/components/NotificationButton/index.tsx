import Icon from '../../assets/img/notification-icon.svg';
import './styles.css';
import axios from "axios";
import {BASE_URL} from "../../utils/request";
import {toast} from "react-toastify";

type Props = {
    saleId: number;
}

function handClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            toast.info("Enviando SMS")
        })
}

function NotificationButton({saleId}: Props) {


    return (
        <div className={"dsmeta-red-btn"} onClick={() => handClick(saleId)}>
            <img src={Icon} alt={"Notificar"}/>
        </div>
    );
}

export default NotificationButton;
import {CardWrapper} from "./CardWrapper";

interface InfoCardProps {
    data: string;
    description: string;
}

export const InfoCard = ({data, description}: InfoCardProps) => (

    <div>
        <div style={{backgroundColor: "#404859", borderRadius: 20, padding: 20}}>
            data
        </div>
    </div>

)
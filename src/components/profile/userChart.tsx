import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip,
    Legend, Filler,
    scales
   } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

export default function UserChart(){

    const labels = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    const dataSets = [ 120, 110, 120, 190, 200, 180, 90, 99, 170, 175, 108, 100 ];

    const data = {

        labels: labels,
        datasets: [
            {
                label: "Monthly Hour Record",
                data: dataSets,
                fill: true,
                borderColor: "#1c398e",
                tension: 0.1,
            }
        ]

    };

    const options = {

        scales: {

            y: {

                title: {

                    display: true,
                    text: "Earned Hours"

                },
                display: true,

            },

            x: {

                title: {

                    display: true,
                    text: "Month"

                },
                display: true,

            }

        }

    }

    return(

        <div className="w-full mx-auto">
            <Line data={data} options={options}></Line>
        </div>

    );

}
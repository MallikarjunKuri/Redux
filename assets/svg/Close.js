import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Close = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={58}
        height={58}
        fill="none"
        {...props}
    >
        <Path
            fill="#1C1C1C"
            d="M46.158 11.842c-9.425-9.425-24.891-9.425-34.316 0-9.425 9.425-9.425 24.891 0 34.316 9.425 9.425 24.65 9.425 34.075 0 9.425-9.425 9.666-24.891.241-34.316ZM35.767 39.15 29 32.383l-6.767 6.767-3.383-3.383L25.617 29l-6.767-6.767 3.383-3.383L29 25.617l6.767-6.767 3.383 3.383L32.383 29l6.767 6.767-3.383 3.383Z"
        />
    </Svg>
)
export default Close

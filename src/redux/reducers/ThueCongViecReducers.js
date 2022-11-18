import { THUE_CONG_VIEC } from "../types/ThueCongViecType"

const stateDefault = {
    thueCongViec: {},
}



export const ThueCongViecReducers = (state = stateDefault, action) => {
    switch (action.type) {

        case THUE_CONG_VIEC: {
            state.thueCongViec = action.thueCongViec
            return { ...state }
        }

        default: return { ...state }
    }
}
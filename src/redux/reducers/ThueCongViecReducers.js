import { DS_CONG_VIEC_DA_THUE, THUE_CONG_VIEC } from "../types/ThueCongViecType"

const stateDefault = {
    thueCongViec: {},

    dsCongViecDaThue: []
}



export const ThueCongViecReducers = (state = stateDefault, action) => {
    switch (action.type) {

        case THUE_CONG_VIEC: {
            state.thueCongViec = action.thueCongViec
            return { ...state }
        }

        case DS_CONG_VIEC_DA_THUE: {
            state.dsCongViecDaThue = action.dsCongViecDaThue
            return { ...state }
        }

        default: return { ...state }
    }
}
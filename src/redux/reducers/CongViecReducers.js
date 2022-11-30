import { ADD_CONG_VIEC, EDIT_CONG_VIEC, INFO_CONG_VIEC, LAY_CHI_TIET_LOAI_CONG_VIEC, LAY_CONG_VIEC_CHI_TIET, LAY_CONG_VIEC_THEO_CHI_TIET_LOAI, LAY_DS_CONG_VIEC, LAY_DS_CONG_VIEC_THEO_TEN, SET_MENU_CONG_VIEC } from "../types/CongViecTypes"


const stateDefault = {


    menuJob: [
        // {
        //     "id": 1,
        //     "tenLoaiCongViec": "Graphics & Design",
        //     "dsNhomChiTietLoai": [
        //         {
        //             "id": 187,
        //             "tenNhom": "HTML/CSS",
        //             "hinhAnh": "http://fiverrnew.cybersoft.edu.vn/images/29-10-2022-08-08-34-ezgif.com-gif-maker.jpg",
        //             "maLoaiCongviec": 1,
        //             "dsChiTietLoai": [
        //                 {
        //                     "id": 8,
        //                     "tenChiTiet": "Social Media Marketing"
        //                 },
        //                 {
        //                     "id": 9,
        //                     "tenChiTiet": "Influencer Marketing"
        //                 },
        //                 {
        //                     "id": 3,
        //                     "tenChiTiet": "Brand Style Guides"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": 188,
        //             "tenNhom": "Design Mobile APP",
        //             "hinhAnh": "http://fiverrnew.cybersoft.edu.vn/images/29-10-2022-08-14-57-animation.jpg",
        //             "maLoaiCongviec": 1,
        //             "dsChiTietLoai": [
        //                 {
        //                     "id": 7,
        //                     "tenChiTiet": "Social"
        //                 },
        //                 {
        //                     "id": 8,
        //                     "tenChiTiet": "Social Media Marketing"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": 200,
        //             "tenNhom": "Design New 02/11",
        //             "hinhAnh": "http://fiverrnew.cybersoft.edu.vn/images/02-11-2022-04-51-38-avt.jpg",
        //             "maLoaiCongviec": 1,
        //             "dsChiTietLoai": []
        //         }
        //     ]
        // },
        // {
        //     "id": 2,
        //     "tenLoaiCongViec": "Digital Marketing",
        //     "dsNhomChiTietLoai": [
        //         {
        //             "id": 7,
        //             "tenNhom": "Social",
        //             "hinhAnh": "https://fiverrnew.cybersoft.edu.vn/images/lcv3.jpg",
        //             "maLoaiCongviec": 2,
        //             "dsChiTietLoai": [
        //                 {
        //                     "id": 8,
        //                     "tenChiTiet": "Social Media Marketing"
        //                 },
        //                 {
        //                     "id": 9,
        //                     "tenChiTiet": "Influencer Marketing"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": 10,
        //             "tenNhom": "Advertising",
        //             "hinhAnh": "https://fiverrnew.cybersoft.edu.vn/images/lcv4.jpg",
        //             "maLoaiCongviec": 2,
        //             "dsChiTietLoai": [
        //                 {
        //                     "id": 11,
        //                     "tenChiTiet": "Social Media Advertising"
        //                 },
        //                 {
        //                     "id": 12,
        //                     "tenChiTiet": "Search Engine Marketing (SEM)"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": 167,
        //             "tenNhom": "Code 24h",
        //             "hinhAnh": "",
        //             "maLoaiCongviec": 2,
        //             "dsChiTietLoai": []
        //         },
        //         {
        //             "id": 203,
        //             "tenNhom": "Design New 123",
        //             "hinhAnh": "",
        //             "maLoaiCongviec": 2,
        //             "dsChiTietLoai": [
        //                 {
        //                     "id": 2,
        //                     "tenChiTiet": "Logo Design"
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     "id": 3,
        //     "tenLoaiCongViec": "Writing & Translation",
        //     "dsNhomChiTietLoai": [
        //         {
        //             "id": 13,
        //             "tenNhom": "Content Writing & Editing",
        //             "hinhAnh": "https://fiverrnew.cybersoft.edu.vn/images/lcv5.jpg",
        //             "maLoaiCongviec": 3,
        //             "dsChiTietLoai": [
        //                 {
        //                     "id": 14,
        //                     "tenChiTiet": "Articles & Blog Posts"
        //                 },
        //                 {
        //                     "id": 15,
        //                     "tenChiTiet": "Proofreading & Editing"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": 16,
        //             "tenNhom": "Business Copy",
        //             "hinhAnh": "https://fiverrnew.cybersoft.edu.vn/images/lcv6.jpg",
        //             "maLoaiCongviec": 3,
        //             "dsChiTietLoai": [
        //                 {
        //                     "id": 17,
        //                     "tenChiTiet": "Brand Voice & Tone"
        //                 },
        //                 {
        //                     "id": 18,
        //                     "tenChiTiet": "Business Names & Slogans"
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     "id": 4,
        //     "tenLoaiCongViec": "Video & Animation",
        //     "dsNhomChiTietLoai": [
        //         {
        //             "id": 19,
        //             "tenNhom": "Social & Marketing Videos",
        //             "hinhAnh": "https://fiverrnew.cybersoft.edu.vn/images/lcv7.jpg",
        //             "maLoaiCongviec": 4,
        //             "dsChiTietLoai": [
        //                 {
        //                     "id": 20,
        //                     "tenChiTiet": "Short Video Ads"
        //                 },
        //                 {
        //                     "id": 21,
        //                     "tenChiTiet": "Social Media Videos"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": 22,
        //             "tenNhom": "Video Editing & Post-Production",
        //             "hinhAnh": "https://fiverrnew.cybersoft.edu.vn/images/lcv8.jpg",
        //             "maLoaiCongviec": 4,
        //             "dsChiTietLoai": [
        //                 {
        //                     "id": 23,
        //                     "tenChiTiet": "Video Editing"
        //                 },
        //                 {
        //                     "id": 24,
        //                     "tenChiTiet": "Visual Effects"
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     "id": 5,
        //     "tenLoaiCongViec": "Music & Audio",
        //     "dsNhomChiTietLoai": [
        //         {
        //             "id": 25,
        //             "tenNhom": "Music Production & Writing",
        //             "hinhAnh": "https://fiverrnew.cybersoft.edu.vn/images/lcv9.jpg",
        //             "maLoaiCongviec": 5,
        //             "dsChiTietLoai": [
        //                 {
        //                     "id": 26,
        //                     "tenChiTiet": "Producers & Composers"
        //                 },
        //                 {
        //                     "id": 27,
        //                     "tenChiTiet": "Songwriters"
        //                 }
        //             ]
        //         },
        //         {
        //             "id": 192,
        //             "tenNhom": "Beat Productions",
        //             "hinhAnh": "http://fiverrnew.cybersoft.edu.vn/images/30-10-2022-07-39-22-application-development_2x.jpg",
        //             "maLoaiCongviec": 5,
        //             "dsChiTietLoai": [
        //                 {
        //                     "id": 14,
        //                     "tenChiTiet": "Articles & Blog Posts"
        //                 },
        //                 {
        //                     "id": 16,
        //                     "tenChiTiet": "Business Copy"
        //                 },
        //                 {
        //                     "id": 7,
        //                     "tenChiTiet": "Social"
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     "id": 114,
        //     "tenLoaiCongViec": "Life Style",
        //     "dsNhomChiTietLoai": []
        // },
        // {
        //     "id": 125,
        //     "tenLoaiCongViec": "Lập trình web",
        //     "dsNhomChiTietLoai": []
        // },
        // {
        //     "id": 127,
        //     "tenLoaiCongViec": "Thiết kế web",
        //     "dsNhomChiTietLoai": []
        // },
        // {
        //     "id": 130,
        //     "tenLoaiCongViec": "Lập trình Android",
        //     "dsNhomChiTietLoai": []
        // },
        // {
        //     "id": 131,
        //     "tenLoaiCongViec": "Lập trình iOS",
        //     "dsNhomChiTietLoai": []
        // },
        // {
        //     "id": 132,
        //     "tenLoaiCongViec": "FE",
        //     "dsNhomChiTietLoai": []
        // }

    ],
    menuItem: [],


    resultSearchJobByName: [],

    menuDetail: [],

    detailJobs: [],

    listJob: [],

    addJob: {},

    infoJob: {}   
    



}

export const CongViecReducers = (state = stateDefault, action) => {
    switch (action.type) {
        case LAY_DS_CONG_VIEC: {
            state.listJob = action.listJob
            return { ...state }

        }


        case SET_MENU_CONG_VIEC: {
            state.menuJob = action.menuJob
            // state.menuArr = state.menuJob
            return { ...state }

        }

        case LAY_DS_CONG_VIEC_THEO_TEN: {
            state.resultSearchJobByName = action.resultSearchJobByName
            return { ...state }
        }

        case LAY_CHI_TIET_LOAI_CONG_VIEC: {
            state.menuItem = action.menuItem
            // state.menuDetail = action.menuDetail
            return { ...state }
        }

        case LAY_CONG_VIEC_THEO_CHI_TIET_LOAI: {
            state.detailItem = action.detailItem
            return { ...state }
        }

        case LAY_CONG_VIEC_CHI_TIET: {
            state.detailJobs = action.detailJobs
            return { ...state }
        }

        // Admin
        case ADD_CONG_VIEC: {
            state.addJob = action.addJob
            return { ...state }
        }
        case INFO_CONG_VIEC: {
            state.infoJob = action.infoJob
            return { ...state }
        }
        case EDIT_CONG_VIEC: {
            state.infoJob = action.infoJob
            return { ...state }
        }

        default: return { ...state }
    }
}
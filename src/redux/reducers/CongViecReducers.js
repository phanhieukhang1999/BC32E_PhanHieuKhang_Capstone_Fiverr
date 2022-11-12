import { SET_MENU_CONG_VIEC } from "../types/CongViecTypes"


const stateDefault = {
    menuJob: [
        {
            "id": 1,
            "tenLoaiCongViec": "Graphics & Design",
            "dsNhomChiTietLoai": [
                {
                    "id": 187,
                    "tenNhom": "HTML/CSS",
                    "hinhAnh": "http://fiverrnew.cybersoft.edu.vn/images/29-10-2022-08-08-34-ezgif.com-gif-maker.jpg",
                    "maLoaiCongviec": 1,
                    "dsChiTietLoai": [
                        {
                            "id": 8,
                            "tenChiTiet": "Social Media Marketing"
                        },
                        {
                            "id": 9,
                            "tenChiTiet": "Influencer Marketing"
                        },
                        {
                            "id": 3,
                            "tenChiTiet": "Brand Style Guides"
                        }
                    ]
                },
                {
                    "id": 188,
                    "tenNhom": "Design Mobile APP",
                    "hinhAnh": "http://fiverrnew.cybersoft.edu.vn/images/29-10-2022-08-14-57-animation.jpg",
                    "maLoaiCongviec": 1,
                    "dsChiTietLoai": [
                        {
                            "id": 7,
                            "tenChiTiet": "Social"
                        },
                        {
                            "id": 8,
                            "tenChiTiet": "Social Media Marketing"
                        }
                    ]
                },
                {
                    "id": 200,
                    "tenNhom": "Design New 02/11",
                    "hinhAnh": "http://fiverrnew.cybersoft.edu.vn/images/02-11-2022-04-51-38-avt.jpg",
                    "maLoaiCongviec": 1,
                    "dsChiTietLoai": []
                }
            ]
        },
        // {
        //     "id": 2,
        //     "tenLoaiCongViec": "Digital Marketing",
        //     "dsNhomChiTietLoai": [
        //       {
        //         "id": 7,
        //         "tenNhom": "Social",
        //         "hinhAnh": "https://fiverrnew.cybersoft.edu.vn/images/lcv3.jpg",
        //         "maLoaiCongviec": 2,
        //         "dsChiTietLoai": [
        //           {
        //             "id": 8,
        //             "tenChiTiet": "Social Media Marketing"
        //           },
        //           {
        //             "id": 9,
        //             "tenChiTiet": "Influencer Marketing"
        //           }
        //         ]
        //       },
        //       {
        //         "id": 10,
        //         "tenNhom": "Advertising",
        //         "hinhAnh": "https://fiverrnew.cybersoft.edu.vn/images/lcv4.jpg",
        //         "maLoaiCongviec": 2,
        //         "dsChiTietLoai": [
        //           {
        //             "id": 11,
        //             "tenChiTiet": "Social Media Advertising"
        //           },
        //           {
        //             "id": 12,
        //             "tenChiTiet": "Search Engine Marketing (SEM)"
        //           }
        //         ]
        //       },
        //       {
        //         "id": 167,
        //         "tenNhom": "Code 24h",
        //         "hinhAnh": "",
        //         "maLoaiCongviec": 2,
        //         "dsChiTietLoai": []
        //       },
        //       {
        //         "id": 203,
        //         "tenNhom": "Design New 123",
        //         "hinhAnh": "",
        //         "maLoaiCongviec": 2,
        //         "dsChiTietLoai": [
        //           {
        //             "id": 2,
        //             "tenChiTiet": "Logo Design"
        //           }
        //         ]
        //       }
        //     ]
        //   },
    ]
}

export const CongViecReducers = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_MENU_CONG_VIEC: {
            state.menuJob = action.menuJob
            return { ...state }

        }
        default: return { ...state }
    }
}
import React from 'react'
import './MenuDetail.scss'
export default function MenuDetail() {
    return (
        <div className='MenuDetail py-36'>
            <div className="container mx-auto">
                <div className='content-banner flex justify-center items-center text-white'>
                    <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3f1b7ea10295936b6846bcff0afd38cf-1626595415203/graphics-design-desktop.png" alt="..." style={{ width: '100%' }} />
                    <div className='img-content flex flex-col justify-center items-center'>
                        <h1 className='text-white'>Graphics & Design</h1>
                        <p className='text-2xl'>Designs to make you stand out.</p>
                        <button>
                            <i class="fa-solid fa-circle-play mr-2"></i>
                            <span>How Fiverr Works</span>
                        </button>
                    </div>
                </div>
                <div className='content-carousel mt-8'>
                    <div className='top flex flex-row justify-between items-center'>
                        <h1 className='text-2xl text-gray-600'>Most popular in Graphics & Design</h1>
                        <div className='icon'>
                            <i class="fa-solid fa-circle-chevron-left mr-3" style={{ color: '#f5f5dc', fontSize: '25px' }}></i>

                            <i class="fa-solid fa-circle-chevron-right" style={{ color: '#9e9e9e', fontSize: '25px' }}></i>
                        </div>
                    </div>
                    <div className='bottom mt-5'>
                        <div className="row">
                            <div className="col">
                                <button className='flex flex-row items-center justify-between'>
                                    <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png" alt="..." style={{ height: '50px' }} />
                                    <span className='font-semibold'>Minimalist Logo Design</span>
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </button>
                            </div>
                            <div className="col">
                                <button className='flex flex-row items-center justify-between'>
                                    <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png" alt="..." style={{ height: '50px' }} />
                                    <span className='font-semibold'>Architecture & Interior Design</span>
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </button>
                            </div>
                            <div className="col">
                                <button className='flex flex-row items-center justify-between'>
                                    <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101624/Photoshop%20Editing_2x.png" alt="..." style={{ height: '50px' }} />
                                    <span className='font-semibold'>Image Editing</span>
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </button>
                            </div>
                            <div className="col">
                                <button className='flex flex-row items-center justify-between'>
                                    <img src="https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/fc6c7b8c1d155625e7878252a09c4437-1653222039380/Nft%20Art%20%281%29.png" alt="..." style={{ height: '50px' }} />
                                    <span className='font-semibold'>NFT Art</span>
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </button>
                            </div>
                            <div className="col">
                                <button className='flex flex-row items-center justify-between'>
                                    <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101623/T-Shirts%20_%20Merchandise_2x.png" alt="..." style={{ height: '50px' }} />
                                    <span className='font-semibold'>T-Shirts & Merchandise</span>
                                    <i class="fa-solid fa-arrow-right-long"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

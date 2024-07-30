import React from 'react'

const CheckEmailPage = () => {
    return (
        <div className='mt-5'>
            <div className='bg-white w-full max-w-sm mx-2 rounded overflow-hidden'>
                <h3>이메일을 입력하세요.</h3>
                <from className='grid gap-4 mt-5' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='name'>성명: </label>
                        <input
                            className='bg-slate-200 px-2 py-1'
                            type='text'
                            id='name'
                            name='name'
                            onChange={hangleOnChange}
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='email'>카카오 계정: </label>
                        <input
                            className='bg-slate-200 px-2 py-1'
                            type='text'
                            id='email'
                            name='email'
                            onChange={hangleOnChange}
                        />
                    </div>
                ></from>
            ></div>
        ></div>
    )
}

export default CheckEmailPage
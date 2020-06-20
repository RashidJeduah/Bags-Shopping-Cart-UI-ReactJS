import React from 'react';
import Item from './item';
import pix from '../assets/images/laptop.jpg';
import pic from '../assets/images/shoulderbag.jpg';
import backpack from '../assets/images/backpack.jpg';
import openwallet from '../assets/images/openwallet.jpg';
import purse from '../assets/images/purse.jpg';
import pinkcase from '../assets/images/pinkcase.jpg';
import sack from '../assets/images/sack.jpg';
import bluebag from '../assets/images/bluebag.jpg';
import wallet from '../assets/images/wallet.jpg';
import redbag from '../assets/images/redbag.jpg';

function Main() {
    return (
        <div className='row' style={{backgroundColor:'gainsboro', padding:'25px', height:'100vh'}}>
            <div className='col-2'>
                <Item name='Laptop Bag'
                image={pix} />
            </div>

            <div className='col-2'>
                <Item name='Armani Bag'
                image={pic} />
            </div>

            <div className='col-2'>
                <Item name='Armani Backpack'
                image={backpack} />
            </div>

            <div className='col-2'>
                <Item name='Gucci Wallet'
                image={openwallet} />
            </div>

            <div className='col-2'>
                <Item name='Red XL Purse'
                image={purse} />
            </div>

            <div className='col-2'>
                <Item name='Pink Case'
                image={pinkcase} />
            </div>

            <div className='col-2'>
                <Item name='Hippie Bag'
                image={sack} />
            </div>

            <div className='col-2'>
                <Item name='Blue Chanel Bag'
                image={bluebag} />
            </div>

            <div className='col-2'>
                <Item name='Armani Wallet'
                image={wallet} />
            </div>

            <div className='col-2'>
                <Item name='Zara Bag'
                image={redbag} />
            </div>
            
        </div>
    )
}

export default Main
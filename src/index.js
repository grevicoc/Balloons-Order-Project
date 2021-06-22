import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import BalloonLogo from './Balloon.svg';
import OrderingLogo from './Vector 3.svg';
import ChoosingLogo1 from './Ellipse 3.svg';
import ChoosingLogo2 from './Ellipse 4.svg';

class MainContainer extends React.Component{
    render(){
        return (
            <div className="main-container">
                <LeftContainer/>
                <MidContainer/>
                <RightContainer/>
            </div>
        );
    }
}

class LeftContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orderBy : 'popular',
            ordering : 'desc'
        };
    }

    orderingClick(){
        let e = document.querySelector('.ordering-logo');
        if (this.state.ordering==='desc'){
            this.setState({ordering:'asc'});
            e.style.cssText = 'transform : rotate(180deg)'
        }else if (this.state.ordering==='asc'){
            this.setState({ordering:'desc'});
            e.style.cssText = 'transform : none'
        }
    }

    orderByClick = (e) => {
        if (e.target.className==='popular'){
            //ubah popular jd bold
            e.target.style.cssText = 'font-weight: bold; color: black;';
            this.setState({orderBy:'popular'});

            //ubah price jd grey
            let price = document.querySelector('.price');
            price.style.cssText = 'font-weight: normal; color: #D1D2BC;';

            //pindahin choosing-logo ke samping popular
            let choosingLogo = document.querySelector('.choosing-logo');
            choosingLogo.style.cssText = 'left: none;'
        }else if (e.target.className==='price'){
            //ubah price jd bold
            e.target.style.cssText = 'font-weight: bold; color: black;';
            this.setState({orderBy:'price'});

            //ubah popular jd grey
            let popular = document.querySelector('.popular');
            popular.style.cssText = 'font-weight: normal; color: #D1D2BC;'

            //pindahin choosing-logo ke samping price
            let choosingLogo = document.querySelector('.choosing-logo');
            choosingLogo.style.cssText = 'left: 6.8em;'
        }
    }

    render(){
        return(
            <div className="left-container">
                <div className="top-sub-container">
                    <div className="name-logo">
                        <span>ballo</span>
                        <img src={BalloonLogo} alt="shape-of-balloon"/>
                        <span> nn</span>
                    </div>
                    <div className="balloon-and-sort-ordering">
                        <span>Balloons</span>
                        <img src={OrderingLogo} alt="ordering-logo" className="ordering-logo" 
                            onClick={()=>this.orderingClick()}
                        />
                    </div>
                    <div className="sort-selection">
                        <ChoosingLogo/>
                        <span className="popular"
                        onClick={this.orderByClick}>by Popular</span>
                        <span className="price"
                        onClick={this.orderByClick}>by Price</span>
                    </div>
                </div>
                <div className="bot-sub-container">
                    <ItemContainer/>
                    <ItemContainer/>
                    <ItemContainer/>
                </div>
            </div>
        );
    }
}

class ChoosingLogo extends React.Component{
    render(){
        return(
            <div className="choosing-logo">
                <img src={ChoosingLogo1} alt="part-of-choosing-logo"/>
                <img className="white-dot" src={ChoosingLogo2} alt="part-of-choosing-logo"/>
            </div>
        );
    }
}

class ItemContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imgSrc : '',
            name : '',
            price : 0
        }
    }
    
    render(){
        return (
            <div>

            </div>
        );
    }
}

class MidContainer extends React.Component{
    render(){
        return(
            <div className="mid-container">

            </div>
        );
    }
}

class RightContainer extends React.Component{
    render(){
        return(
            <div className="right-container">

            </div>
        );
    }
}

ReactDOM.render(<MainContainer />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import BalloonLogo from './images/Balloon.svg';
import OrderingLogo from './images/Vector 3.svg';
import ChoosingLogo1 from './images/Ellipse 3.svg';
import ChoosingLogo2 from './images/Ellipse 4.svg';

import BalloonCactus from './images/balon-kaktus.jpg';
import PartyBalloon from './images/balon-pesta.jpg';
import FlyingBalloon from './images/balon-langit.jpg';
import StarsBalloon from './images/balon-bintang2.jpg';
import ManyBalloons from './images/balon-rame.jpg';

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
            ordering : 'desc',
            items : [<ItemContainer 
                src={BalloonCactus} name='Custom Party Balloons'
                price={15} description='Bagus!' key={1}
                />,
                <ItemContainer
                src={PartyBalloon} name='Colorful Balloons'
                price={5} description='Wow!'    key={2}
                />,
                <ItemContainer
                src={ManyBalloons} name='So Many Balloons'
                price={50} description='Awesome!'    key={3}
                />,
                <ItemContainer
                src={FlyingBalloon} name='Beatiful Ballons'
                price={20} description='Magnificent!'    key={4}
                />,
                <ItemContainer
                src={StarsBalloon} name='Star Ballons'
                price={25} description='Cool!'    key={5}
                />],
            itemsShown : [<ItemContainer 
                src={BalloonCactus} name='Custom Party Balloons'
                price={15} description='Bagus!' key={1}
                />,
                <ItemContainer
                src={PartyBalloon} name='Colorful Balloons'
                price={5} description='Wow!'    key={2}
                />,
                <ItemContainer
                src={ManyBalloons} name='So Many Balloons'
                price={50} description='Awesome!'    key={3}
                />,
                <ItemContainer
                src={FlyingBalloon} name='Beatiful Ballons'
                price={20} description='Magnificent!'    key={4}
                />,
                <ItemContainer
                src={StarsBalloon} name='Star Ballons'
                price={25} description='Cool!'    key={5}
                />]
        };
    }

    ascendingSort(item1,item2){
        return item1.props.price - item2.props.price;
    }

    descendingSort(item2,item1){
        return item1.props.price - item2.props.price;
    }

    orderingClick(){
        console.log(this)
        let e = document.querySelector('.ordering-logo');
        if (this.state.ordering==='desc'){
            this.setState({ordering:'asc'});    //kebalik ahaha

            if (this.state.orderBy==='price'){
                let sortedItems = this.state.items.sort(this.descendingSort);
                this.setState({itemsShown:sortedItems});
            }

            e.style.cssText = 'transform : rotate(180deg)'
        }else if (this.state.ordering==='asc'){
            this.setState({ordering:'desc'});
            
            if (this.state.orderBy==='price'){
                let sortedItems = this.state.items.sort(this.ascendingSort);
                this.setState({itemsShown:sortedItems});
            }

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

            this.setState({itemsShown:this.state.items});
        }else if (e.target.className==='price'){
            //ubah price jd bold
            e.target.style.cssText = 'font-weight: bold; color: black;';
            this.setState({orderBy:'price'});

            //ubah popular jd grey
            let popular = document.querySelector('.popular');
            popular.style.cssText = 'font-weight: normal; color: #D1D2BC;'

            //pindahin choosing-logo ke samping price
            let choosingLogo = document.querySelector('.choosing-logo');
            choosingLogo.style.cssText = 'left: 7.8em;'

            if (this.state.ordering==='asc'){
                let sortedItems = this.state.items.sort(this.descendingSort);
                this.setState({itemsShown:sortedItems});
            }else if (this.state.ordering==='desc'){
                let sortedItems = this.state.items.sort(this.ascendingSort);
                this.setState({itemsShown:sortedItems});
            }
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
                    {this.state.itemsShown}
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
            imgSrc : props.src,
            name : props.name,
            price : props.price,
            details : props.details
        }
    }
    
    render(){
        return (
            <div className='item-container'>
                <img src={this.state.imgSrc} alt={this.state.name + 'picture'} />
                <span className='item-name'>{this.state.name}</span>
                <span className='item-price'>From ${this.state.price}</span>
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
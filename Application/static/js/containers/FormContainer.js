import React, {Component} from 'react';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';
import Select from '../components/Select';

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fuelTypeOption: [87, 88, 89, 93, 97],
            fuelType: '',
            highwayMPG: '',
            localMPG:'',
            millage: '',
            kbbPrice:'',
            price:'',
            name: '',
            autoManualOption: ['Auto', 'Manual', 'Mixed'],
            autoManual: '',
            interiorColorOPtion: ['Black', 'White', 'Grey', 'Other'],
            interiorColor: '',
            outsideColorOPtion: ['Black', 'White', 'Grey', 'Red', 'Blue', 'Other'],
            outsideColor: '',
            brandOPtion: ['Benz', 'BMW', 'Audi', 'Jaguar', 'Blue', 'Lexus', 'Porsche', 'LandRover', 'VW', 'Other'],
            brand: '',
            madeYearOption: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
            madeYear: '',
            description: '',
            addedCar: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleKBBPriceChange = this.handleKBBPriceChange.bind(this);
        this.handleMillageChange = this.handleMillageChange.bind(this);
        this.handleLocalMPGChange = this.handleLocalMPGChange.bind(this);
        this.handleHighwayMPGChange = this.handleHighwayMPGChange.bind(this);
        this.handleAutoManualChange = this.handleAutoManualChange.bind(this);
        this.handleInteriorColorChange = this.handleInteriorColorChange.bind(this);
        this.handleOutsideColorChange = this.handleOutsideColorChange.bind(this);
        this.handleBrandChange = this.handleBrandChange.bind(this);
        this.handleMadeYearChange = this.handleMadeYearChange.bind(this);
        this.handleFuelTypeChange = this.handleFuelTypeChange.bind(this);

    }
    componentDidMount() {
    }
    handleFuelTypeChange(e) {
        this.setState({ fuelType: e.target.value }, () => console.log('fuelType', this.state.fuelType));
    }
    handleMadeYearChange(e) {
        this.setState({ madeYear: e.target.value }, () => console.log('madeYear', this.state.madeYear));
    }
    handleBrandChange(e) {
        this.setState({ brand: e.target.value }, () => console.log('brand', this.state.brand));
    }
    handleOutsideColorChange(e) {
        this.setState({ outsideColor: e.target.value }, () => console.log('outsideColor', this.state.outsideColor));
    }
    handleInteriorColorChange(e) {
        this.setState({ interiorColor: e.target.value }, () => console.log('interiorColor', this.state.interiorColor));
    }
    handleAutoManualChange(e) {
        this.setState({ autoManual: e.target.value }, () => console.log('autoManual', this.state.autoManual));
    }
    handleHighwayMPGChange(e) {
        this.setState({ highwayMPG: e.target.value }, () => console.log('highwayMPG', this.state.highwayMPG));
    }
    handleLocalMPGChange(e) {
        this.setState({ localMPG: e.target.value }, () => console.log('localMPG', this.state.localMPG));
    }
    handleMillageChange(e) {
        this.setState({ millage: e.target.value }, () => console.log('millage', this.state.millage));
    }
    handleKBBPriceChange(e) {
        this.setState({ kbbPrice: e.target.value }, () => console.log('kbbPrice', this.state.kbbPrice));
    }
    handlePriceChange(e) {
        this.setState({ price: e.target.value }, () => console.log('price', this.state.price));
    }
    handleNameChange(e) {
        this.setState({ name: e.target.value }, () => console.log('name:', this.state.name));
    }
    handleDescriptionChange(e) {
        this.setState({ description: e.target.value }, () => console.log('description', this.state.description));
    }
    handleAddedCarChange(e) {
        this.setState({ added: e.target.value }, () => console.log('description', this.state.description));

    }
    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            fuelType: '',
            highwayMPG: '',
            localMPG: '',
            millage: '',
            price: '',
            kbbPrice: '',
            name: '',
            autoManual: '',
            interiorColor: '',
            outsideColor: '',
            brand: '',
            madeYear: '',
            description: '',
        });
    }
    handleFormSubmit(e) {
        e.preventDefault();

        const formPayload = {
            fuelType: this.state.fuelType,
            madeYear: this.state.madeYear,
            brand: this.state.brand,
            outsideColor: this.state.outsideColor,
            interiorColor: this.state.interiorColor,
            autoManual: this.state.autoManual,
            highwayMPG: this.state.highwayMPG,
            localMPG: this.state.localMPG,
            millage: this.state.millage,
            kbbPrice: this.state.kbbPrice,
            price: this.state.price,
            name: this.state.name,
            description: this.state.description,
        };

        console.log('Send this in a POST request:', formPayload);

        fetch('http://0.0.0.0:5000/test', {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formPayload)
        });
        this.handleClearForm(e);

        fetch('http://0.0.0.0:5000/car', {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }})
            .then(response => response.json())
            .then((responseJson)=> {
                console.log(responseJson);
                console.log(responseJson.data);
                return responseJson;
            });

    }
    render() {
        return (
            <div>
            <form className="container" onSubmit={this.handleFormSubmit}>
                <h5>Add New Car</h5>
                <SingleInput
                    inputType={'text'}
                    title={'Highway MPG'}
                    name={'highwayMPG'}
                    controlFunc={this.handleHighwayMPGChange}
                    content={this.state.highwayMPG}
                    placeholder={'Type highway MPG here.'} />
                <SingleInput
                    inputType={'text'}
                    title={'Local MPG'}
                    name={'localMPG'}
                    controlFunc={this.handleLocalMPGChange}
                    content={this.state.localMPG}
                    placeholder={'Type local MPG here.'} />
                <SingleInput
                    inputType={'text'}
                    title={'Millage'}
                    name={'millage'}
                    controlFunc={this.handleMillageChange}
                    content={this.state.millage}
                    placeholder={'Type millage here.'} />
                <SingleInput
                    inputType={'text'}
                    title={'Name'}
                    name={'name'}
                    controlFunc={this.handleNameChange}
                    content={this.state.name}
                    placeholder={'Type car name here.'} />
                <SingleInput
                    inputType={'text'}
                    title={'Price'}
                    name={'price'}
                    controlFunc={this.handlePriceChange}
                    content={this.state.price}
                    placeholder={'Type in price here.'} />
                <SingleInput
                    inputType={'text'}
                    title={'KBB Price'}
                    name={'kbbPrice'}
                    controlFunc={this.handleKBBPriceChange}
                    content={this.state.kbbPrice}
                    placeholder={'Type in KBB price here.'} />
                <Select
                    name={'autoManual'}
                    placeholder={'Choose Auto/Manual'}
                    controlFunc={this.handleAutoManualChange}
                    options={this.state.autoManualOption}
                    selectedOption={this.state.autoManual} />
                <Select
                    name={'fuelType'}
                    placeholder={'Choose fuelType'}
                    controlFunc={this.handleFuelTypeChange}
                    options={this.state.fuelTypeOption}
                    selectedOption={this.state.fuelType} />
                <Select
                    name={'interiorColor'}
                    placeholder={'Choose interior color'}
                    controlFunc={this.handleInteriorColorChange}
                    options={this.state.interiorColorOPtion}
                    selectedOption={this.state.interiorColor} />
                <Select
                    name={'outsideColor'}
                    placeholder={'Choose outside color'}
                    controlFunc={this.handleOutsideColorChange}
                    options={this.state.outsideColorOPtion}
                    selectedOption={this.state.outsideColor} />
                <Select
                    name={'brand'}
                    placeholder={'Choose brand'}
                    controlFunc={this.handleBrandChange}
                    options={this.state.brandOPtion}
                    selectedOption={this.state.brand} />

                <Select
                    name={'madeYear'}
                    placeholder={'Choose Made Year'}
                    controlFunc={this.handleMadeYearChange}
                    options={this.state.madeYearOption}
                    selectedOption={this.state.madeYear} />
                <TextArea
                    title={'Please enter any other car descriptions here.'}
                    rows={5}
                    resize={false}
                    content={this.state.description}
                    name={'description'}
                    controlFunc={this.handleDescriptionChange}
                    placeholder={'Please be thorough in your descriptions'} />

                <input type="file" className="photo" ref="photo1" />
                <input type="file" className="photo" ref="photo2" />
                <input type="file" className="photo" ref="photo3" />
                <input type="file" className="photo" ref="photo4" />

                <input
                    type="submit"
                    className="btn btn-primary float-right"
                    value="Submit"/>
                <button
                    className="btn btn-link float-left"
                    onClick={this.handleClearForm}>Clear form</button>

            </form>

            </div>
        );
    }
}

export default FormContainer;
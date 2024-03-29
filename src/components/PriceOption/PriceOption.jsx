
import PropTypes from 'prop-types';
const PriceOption = ({option}) => {
    const {name,price,features}=option
    return (
        <div className='bg-blue-500 rounded-lg p-4 text-white'>
            <h2>
                <span className='text-5xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
        </div>
    );
};
PriceOption.propTypes={
    option:PropTypes.object
}
export default PriceOption;
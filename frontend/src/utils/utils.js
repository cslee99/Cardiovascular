/**
 * PRIVATE
 * Flatten a deep object into a one level object with it’s path as key
 *
 * @param  {object} object - The object to be flattened
 *
 * @return {object}        - The resulting flat object
 */
export const flatten = object => {
    return Object.assign({}, ... function _flatten(objectBit, path = '') { //spread the result into our return object
        return [].concat( //concat everything into one level
            ...Object.keys(objectBit).map( //iterate over object
                key => typeof objectBit[key] === 'object' ? //check if there is a nested object
                _flatten(objectBit[key], `${ path }${ key }`) : //call itself if there is
                ({
                    [`${ path };${ key }`]: objectBit[key]
                }) //append object with it’s path as key
            )
        )
    }(object));
};
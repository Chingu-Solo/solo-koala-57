import React from 'react';
import Search from './majorNav/search';
import SampleText from './majorNav/sampleText';
import FontSize from './majorNav/fontSize';
import Mode from './majorNav/mode';
import Grid from './majorNav/grid';
import Reset from './majorNav/reset';

const MajorNav = () => {
    return (
        <div className="row">
            <form className="col s12">
                <div>
                    <Search />
                    <SampleText />
                    <FontSize />
                    <Mode />
                    <Grid />
                    <Reset />
                </div>
            </form>
        </div>
    )
}    

export default MajorNav;
import React from 'react';
import Search from './majorNav/search';
import SampleText from './majorNav/sampleText';
import FontSize from './majorNav/fontSize';
import Mode from './majorNav/mode';
import Grid from './majorNav/grid';
import Reset from './majorNav/reset';

const MajorNav = () => {
    return (
                <div className="flex-container valign-wrapper">
                    <div className="flex-input">
                    <Search />
                    <SampleText />
                    </div>
                    <div className="flex-btn">
                        <FontSize />
                        <Mode />
                        <Grid />
                        <Reset />
                    </div>
                </div>
    )
}    

export default MajorNav;
import React, { Component } from "react";
import ReactGA from 'react-ga';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead';
import options from './people';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import ReactGoogleSheets from 'react-google-sheets';

ReactGA.initialize('UA-148182167-1');
ReactGA.pageview('/rsvp');

const RSVPStyled = styled.div`
    &.main{
        align-items: center;
        display: flex;
        flex-direction: column;
        position: relative;

        .intro{
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 3rem 0;

            @media (max-width: 50rem) {
                max-width: 15rem;
            }

            .image-holder{
                align-items: center;
                display: flex;
                flex-direction: row;
                justify-content: center;

                img{
                    margin: 0 1.5rem;
                }
            }

            p{
                font-style: italic;
            }
        }
    }

    .rbt{

        .rbt-sr-status{
            display: none;
        }

        .rbt-menu{
            background: white;
            list-style-type: none;
            padding: 0;
            margin: 0;
            z-index: 1;
    
            li{
                a{  
                    display: block;
                    color: black;
                    width: 100%;
                }
            }
        }
    }

    
        
`;





class RSVP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sheetLoaded: false,
        }
    }
    render() {
        return (
            <RSVPStyled className="main">
                <div className="intro">
                    <div className="image-holder">

                    </div>

                    <p>Let us know if you'll be able to attend our big day!</p>
                </div>

                <Typeahead
                    labelKey={options => `${options.firstName} ${options.lastName}`}
                    options={options}
                    placeholder="Type your name..."
                />

                <ReactGoogleSheets
                    clientId={'856499321828-sajbabg3m7b79op0knkkrqs6n3an8pv8.apps.googleusercontent.com'}
                    apiKey={'AIzaSyCXKyDaGyFTV0I5UrweOqdXgD9FEwCuHyc'}
                    spreadsheetId={YOUR_SPREADSHEET_ID}
                    afterLoading={() => this.setState({ sheetLoaded: true })}
                >
                    {this.state.sheetLoaded ?
                        <div>
                            {/* Access Data */}
                            {console.log('Your sheet data : ', this.props.getSheetsData({ YOUR_SPREADSHEET_NAME }))}
                            {/* Update Data */}
                            <button onClick={() => {
                                this.props.updateCell(
                                    'sheet02', // sheetName
                                    'E', // column
                                    13, // row
                                    'Apple', // value
                                    null, // successCallback
                                    (error) => {
                                        console.log('error', error)
                                    } // errorCallback
                                );
                            }}>update cell!</button>
                        </div>
                        :
                        'loading...'
                    }
                </ReactGoogleSheets>



            </RSVPStyled >

        )
    }
}

export default ReactGoogleSheets.connect(RSVP);
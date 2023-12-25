import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Label,
    Input,
    Main,
    Container,
    LabelTime,
    StarsharpIcon,
    Icon,
    AdornStartContainer,
    Value,
    Placeholder,
    RemoveredeyefilledIcon,
    AdornEndContainer,
    Content,
    Underline,
    InputTime,
    HelperText,
    Formhelpertext,
    Textfield,
    Frame,
    TextfieldMultiline,
    Textfield2,
    Frame2,
    AdornStartContainer3,
    MinHeight,
    Value3,
    Placeholder3,
    MinWidth,
    Icon3,
    Adornmentend,
    AdornEndContainer3,
    Content4,
    Input3,
    Underline3,
    Content3,
    Formhelpertext3,
    Row,
    Frame4,
    MaskedIcon,
    Button1,
    Base,
    Frame3,
    Frame1,
    FrameParent,
    Main1,
    Container1,
    GroupIcon,
    ContainerParent,
    DeliveryRequestRoot,
} from "./styles";
import TextField from '@mui/material/TextField/TextField';
import Button from '@mui/material/Button/Button';
import {DateTimePicker, DateTimePicker as MuiTextField} from '@mui/x-date-pickers/DateTimePicker/DateTimePicker'
import { RootState } from '../../redux/reducers/rootReducer';

interface RequestFormProps {

}

const RequestForm: React.FC<RequestFormProps> = () => {

    const userId = useSelector((state: RootState) => state.users.userId);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const [formState, setFormState] = useState({
        pickupLocation: '',
        dropOffLocation: '',
        description: '',
        preferredDeliveryTime: '',
        priceOffer: 0,
        customerId: userId,
    });

    const apiUrl = process.env.NODE_ENV === 'development'
        ? 'http://localhost:4200'
        : 'https://bidup-api-3gltjz2saq-ue.a.run.app';

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState((prevFormState: any) => ({
            ...prevFormState,
            [name]: value,
        }));
        console.log(value)
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log('submitting')

        try {
            setLoading(true);

            // Dispatching the action is commented out for now, as the axios.post call is used directly
            // dispatch(await submitDeliveryRequest(formState));

            axios.post(`${apiUrl}/service/`, formState);

            setFormState({
                pickupLocation: '',
                dropOffLocation: '',
                description: '',
                preferredDeliveryTime: '',
                priceOffer: 0,
                customerId: userId,
            });

            setTimeout(() => {
                setLoading(false);
                navigate('/request-success');
            }, 3000);
        } catch (error) {
            console.error('Error submitting request:', error);
            setLoading(false);
        }
    };


    return (
        <>
            
                <DeliveryRequestRoot>

                    <FrameParent>
                    <form onSubmit={handleSubmit}>
                        <Frame>
                            <Container>
                                <Main />
                            </Container>
                            <Textfield>
                                <TextField label="Pickup location"
                                    variant='standard'
                                    size="medium"
                                    value={formState.pickupLocation}
                                    sx={{width: '100%'}}
                                    name="pickupLocation"
                                    onChange={handleInputChange}></TextField>
                                {/* <Input>
              <Label>Label</Label>
              <Content>
                <AdornStartContainer>
                  <Icon>
                    <StarsharpIcon alt="" src="/starsharp@2x.png" />
                  </Icon>
                </AdornStartContainer>
                <Value>Value</Value>
                <Placeholder>Placeholder</Placeholder>
                <AdornEndContainer>
                  <RemoveredeyefilledIcon
                    alt=""
                    src="/removeredeyefilled@2x.png"
                  />
                </AdornEndContainer>
              </Content>
              <Underline />
            </Input> */}
                            </Textfield>
                        </Frame>
                        <Frame1>
                            <Frame2>
                                <TextfieldMultiline>
                                    <Input>
                                        <TextField label="Dropoff location"
                                            variant='standard'
                                            size="medium"
                                            name="dropOffLocation"
                                            value={formState.dropOffLocation}
                                            sx={{width: '100%'}}
                                            onChange={handleInputChange}></TextField>
                                        {/* <Content>
                  <AdornStartContainer>
                    <Icon>
                      <StarsharpIcon alt="" src="/starsharp@2x.png" />
                    </Icon>
                  </AdornStartContainer>
                  <Value>Value</Value>
                  <Placeholder>Placeholder</Placeholder>
                  <AdornEndContainer>
                    <RemoveredeyefilledIcon
                      alt=""
                      src="/removeredeyefilled@2x.png"
                    />
                  </AdornEndContainer>
                </Content> */}

                                    </Input>
                                    {/* <Formhelpertext>
                <HelperText>Helper text</HelperText>
              </Formhelpertext> */}
                                </TextfieldMultiline>
                                <TextfieldMultiline>
                                    <Textfield2>
                                        <Input>
                                            <TextField
                                                multiline label="Description"
                                                variant='standard'
                                                onChange={handleInputChange}
                                                name="description"
                                                value={formState.description}
                                                sx={{width: '100%'}}
                                                size="medium">

                                            </TextField>
                                            {/* <Label>Label</Label>
                  <Content>
                    <AdornStartContainer>
                      <Icon>
                        <StarsharpIcon alt="" src="/starsharp@2x.png" />
                      </Icon>
                    </AdornStartContainer>
                    <Value>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </Value>
                    <Placeholder>Placeholder</Placeholder>
                    <AdornEndContainer>
                      <RemoveredeyefilledIcon
                        alt=""
                        src="/removeredeyefilled@2x.png"
                      />
                    </AdornEndContainer>
                  </Content>
                  <Underline /> */}
                                        </Input>
                                        {/* <Formhelpertext>
                  <HelperText>Helper text</HelperText>
                </Formhelpertext> */}
                                    </Textfield2>
                                </TextfieldMultiline>
                            </Frame2>
                            <Frame3>
                                <Frame4>
                                    <Row>
                                        <Textfield2>
                                            <LabelTime>
                                                Preferred Delivery Time:
                                                   
                                                <InputTime
                                                    type="datetime-local"
                                                    name="preferredDeliveryTime"
                                                    value={formState.preferredDeliveryTime}
                                                    onChange={handleInputChange}
                                                
                                                    required
                                                />
                                            </LabelTime>
                                            {/* <Content3>
                    <Input3>
                      <Label>Date</Label>
                      <Content4>
                        <AdornStartContainer3>
                          <Icon>
                            <StarsharpIcon alt="" src="/starsharp@2x.png" />
                          </Icon>
                        </AdornStartContainer3>
                        <MinHeight />
                        <Value3>11/12/2021</Value3>
                        <Placeholder3>Placeholder</Placeholder3>
                        <MinWidth />
                        <AdornEndContainer3>
                          <Adornmentend>
                            <Icon3>
                              <StarsharpIcon
                                alt=""
                                src="/calendartodayfilled@2x.png"
                              />
                            </Icon3>
                          </Adornmentend>
                        </AdornEndContainer3>
                      </Content4>
                    </Input3>
                    <Underline3 />
                  </Content3>
                  <Formhelpertext3>
                    <HelperText>Helper text</HelperText>
                  </Formhelpertext3> */}
                                        </Textfield2>
                                        <Textfield2>
                                            <Content3>
                                                <Input3>
                                                    {/* <Label>Time</Label> */}
                                                    <Content4>
                                                        <AdornStartContainer3>
                                                            {/* <Icon>
                            <StarsharpIcon alt="" src="/starsharp@2x.png" />
                          </Icon> */}
                                                        </AdornStartContainer3>
                                                        <MinHeight />
                                                        {/* <Value3>03:22</Value3>
                        <Placeholder3>Placeholder</Placeholder3> */}
                                                        <MinWidth />
                                                        <AdornEndContainer3>
                                                            <Adornmentend>
                                                                {/* <Icon3>
                              <StarsharpIcon
                                alt=""
                                src="/calendartodayfilled@2x.png"
                              />
                            </Icon3> */}
                                                            </Adornmentend>
                                                        </AdornEndContainer3>
                                                    </Content4>
                                                </Input3>
                                                <Underline3 />
                                            </Content3>
                                            <Formhelpertext3>
                                                <HelperText>Helper text</HelperText>
                                            </Formhelpertext3>
                                        </Textfield2>
                                    </Row>
                                    <TextfieldMultiline>
                                        <Input>
                                            <TextField label="Price"
                                                variant='standard'
                                                size="medium"
                                                onChange={handleInputChange}
                                                sx={{width: '100%'}}
                                                name="priceOffer"
                                                value={formState.priceOffer}></TextField>
                                            {/* <Label>Label</Label> */}
                                            <Content>
                                                <AdornStartContainer>
                                                    <Icon>
                                                        <StarsharpIcon alt="" src="/starsharp@2x.png" />
                                                    </Icon>
                                                </AdornStartContainer>
                                                {/* <Value>Value</Value>
                    <Placeholder>Placeholder</Placeholder> */}
                                                <AdornEndContainer>
                                                    {/* <RemoveredeyefilledIcon
                        alt=""
                        src="/removeredeyefilled@2x.png"
                      /> */}
                                                </AdornEndContainer>
                                            </Content>
                                            <Underline />
                                        </Input>
                                        <Formhelpertext>
                                            <HelperText>Helper text</HelperText>
                                        </Formhelpertext>
                                    </TextfieldMultiline>
                                </Frame4>
                                <Button variant='contained' color='primary' size='large' type="submit" sx={{width: '100%'}}>Submit</Button>
                                {/* <Button>
              <Base>
                <MaskedIcon alt="" src="/masked-icon@2x.png" />
                <Button1>Submit</Button1>
                <MaskedIcon alt="" src="/masked-icon@2x.png" />
              </Base>
            </Button> */}
                            </Frame3>
                        </Frame1>
                        </form>
                    </FrameParent>
                    <ContainerParent>

                        <GroupIcon alt="" src="/BidUpLogo.svg" />
                    </ContainerParent>

                </DeliveryRequestRoot>
            
        </>
    );
}

function mapStateToProps(state: RootState) {
    return {
        registered: state.deliveryForm.successfulRequest,
        registrationMessage: state.deliveryForm.successMessage
    };
}

export default connect(mapStateToProps)(RequestForm);

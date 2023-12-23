// styles.ts
import styled from "styled-components";

export const Main = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  overflow: hidden;
  display: none;
`;

export const Container = styled.div`
  background-color: var(--background-default);
  width: 404px;
  height: 713px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: var(--md);
`;

export const Label = styled.div`
  position: relative;
  letter-spacing: 0.15px;
  line-height: 12px;
`;

export const StarsharpIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;

export const Icon = styled.div`
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const AdornStartContainer = styled.div`
  height: 1px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-5xs) 0px 0px;
  box-sizing: border-box;
  z-index: 0;
`;

export const Value = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.15px;
  line-height: 24px;
  z-index: 1;
`;

export const Placeholder = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.15px;
  line-height: 24px;
  color: var(--text-disabled);
  display: none;
  z-index: 2;
`;

export const RemoveredeyefilledIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  display: none;
`;

export const AdornEndContainer = styled.div`
  margin: 0 !important;
  position: absolute;
  top: calc(50% - 0.5px);
  right: 0px;
  height: 1px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 3;
`;

export const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  min-width: 24px;
  min-height: 24px;
  font-size: var(--input-value-size);
  color: var(--text-primary);
`;

export const Underline = styled.div`
  align-self: stretch;
  position: relative;
  border-top: 1px solid var(--components-input-standard-enabledborder);
  box-sizing: border-box;
  height: 1px;
`;

export const Input = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;

export const HelperText = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.4px;
  line-height: 166%;
`;

export const Formhelpertext = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
`;

export const Textfield = styled.div`
  width: 404px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: -691px;
`;

export const Frame = styled.div`
  width: 404px;
  height: 713px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const TextfieldMultiline = styled.div`
  width: 404px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Textfield2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Frame2 = styled.div`
  width: 404px;
  height: 178px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-15xl);
`;

export const AdornStartContainer3 = styled.div`
  height: 1px;
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-5xs) 0px 0px;
  box-sizing: border-box;
  z-index: 0;
`;

export const MinHeight = styled.div`
  position: relative;
  width: 0px;
  height: 24px;
  z-index: 1;
`;

export const Value3 = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.15px;
  line-height: 24px;
  z-index: 2;
`;

export const Placeholder3 = styled.div`
  flex: 1;
  position: relative;
  letter-spacing: 0.15px;
  line-height: 24px;
  color: var(--text-disabled);
  display: none;
  z-index: 3;
`;

export const MinWidth = styled.div`
  position: relative;
  width: 24px;
  height: 0px;
  z-index: 4;
`;

export const Icon3 = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Adornmentend = styled.div`
  border-radius: var(--br-81xl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs);
`;

export const AdornEndContainer3 = styled.div`
  margin: 0 !important;
  position: absolute;
  top: calc(50% - 0.5px);
  right: 0px;
  height: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

export const Content4 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  font-size: var(--input-value-size);
  color: var(--text-primary);
`;

export const Input3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-xs) var(--padding-5xs);
  gap: var(--gap-10xs);
  z-index: 0;
`;

export const Underline3 = styled.div`
  position: absolute;
  margin: 0 !important;
  width: 100.25%;
  right: -0.12%;
  bottom: -0.5px;
  left: -0.12%;
  border-top: 1px solid var(--components-input-standard-enabledborder);
  box-sizing: border-box;
  height: 1px;
  z-index: 1;
`;

export const Content3 = styled.div`
  align-self: stretch;
  border-radius: var(--borderradius) var(--borderradius) var(--borderradius)
    var(--borderradius);
  background-color: var(--components-input-filled-enabledfill);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;

export const Formhelpertext3 = styled.div`
  align-self: stretch;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-sm) 0px;
`;

export const Row = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;

export const Frame4 = styled.div`
  width: 404px;
  height; 75px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-15xl);
`;

export const MaskedIcon = styled.img`
  position: relative;
  width: 18px;
  height: 22px;
  object-fit: cover;
  display: none;
`;

export const Button1 = styled.div`
  position: relative;
  letter-spacing: 0.46px;
  line-height: 26px;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Base = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;

export const Button = styled.div`
  align-self: stretch;
  border-radius: var(--borderradius);
  background-color: var(--primary-main);
  box-shadow: var(--elevation-2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-3xl);
  text-align: center;
  font-size: var(--button-large-size);
  color: var(--background-default);
`;

export const Frame3 = styled.div`
  width: 404px;
  height: 360px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 108px;
`;

export const Frame1 = styled.div`
  width: 404px;
  height: 572px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-15xl);
  margin-top: -609px;
`;

export const FrameParent = styled.div`
  width: 404px;
  height: 713px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Main1 = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
`;

export const Container1 = styled.div`
  background-color: var(--background-default);
  width: 509px;
  height: 713px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--boundvariablesdata) var(--boundvariablesdata);
  box-sizing: border-box;
  max-width: var(--sm);
`;

export const GroupIcon = styled.img`
  position: relative;
  width: 290px;
  height: 330px;
  object-fit: cover;
  margin-top: -536px;
`;

export const ContainerParent = styled.div`
  width: 509px;
  height: 713px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const DeliveryRequestRoot = styled.div`
  background-color: var(--background-default);
  width: 1536px;
  height: 800px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  padding: var(--padding-22xl) 200px var(--padding-22xl) 318px;
  box-sizing: border-box;
  gap: 105px;
  text-align: left;
  font-size: var(--input-helper-size);
  color: var(--text-secondary);
  font-family: var(--button-large);
  margin: auto; /* Center both horizontally and vertically */
`;

export const LabelTime = styled.label`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #333;
  width: 404px;
  margin-left:3px;
`;

export const InputTime = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  width: 80%;
  border: none; /* Set border to none to make it invisible */
  border-radius: 4px;
`;
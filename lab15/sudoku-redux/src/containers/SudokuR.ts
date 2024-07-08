import { State } from "../reducers/root";
import { Dispatch } from 'react';
import { Action, help, reset, solve } from "../actions";
import { connect } from "react-redux"
import Sudoku from "../components/sudoku";

const mapStateToProps = (state : State ) => {
    return {
        field : state.field,
        fieldConst : state.fieldConst,
        errsI : state.errsI,
        errsJ : state.errsJ,
        errsS : state.errsS,
    }
}

const mapDispatchToProps = (dispatch : Dispatch<Action>) => ({
    help: () =>
        dispatch(help()),
    new: () =>
        dispatch(reset()),
    solve: () =>
        dispatch(solve()),
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sudoku);
import { State } from "../reducers/root";
import { Dispatch } from 'react';
import { Action, input, up, down, left, right } from "../actions";
import { connect } from "react-redux"
import Cell from "../components/cell";

type ownProps = {
    val : number,  
    i : number,
    j : number,
    s : number,
    isClickable : boolean
}

const mapStateToProps = (state : State, ownProps : ownProps ) => {
    return {
        val : ownProps.val,
        i : ownProps.i,
        j : ownProps.j,
        s : ownProps.s,
        isClickable : ownProps.isClickable,
        field : state.field,
        fieldConst : state.fieldConst,
        errsI : state.errsI,
        errsJ : state.errsJ,
        errsS : state.errsS,
        isSolved : state.isSolved,
        currow : state.currow,
        curcol : state.curcol
    }
}

const mapDispatchToProps = (dispatch : Dispatch<Action>) => ({
    fnc: (r : number, c : number, v : number) =>
        dispatch(input(r, c, v)),
    upAr: (r : number, c : number) =>
        dispatch(up(r, c)),
    downAr: (r : number, c : number) =>
        dispatch(down(r, c)),
    leftAr: (r : number, c : number) =>
        dispatch(left(r, c)),
    rightAr: (r : number, c : number) =>
        dispatch(right(r, c)),
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cell);
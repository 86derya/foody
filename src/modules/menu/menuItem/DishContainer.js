import React, { Component } from 'react';

import DishItem from './DishView';
import styles from './MenuItem.module.css';
import ratingOptions from '../../../configs/ratingOptions';
import { getMenuItemById } from '../../../services/apiMenu';
import routes from '../../../configs/routes';
// import Spinner from '../../../components/spinner/Spinner';

// const v4 = require('uuid/v4');

// const DishListRated = DishList.map(dish => ({
//   id: dish.id,
//   comments: [
//     { commentText: '1st comment left', commentRating: 5, id: 1 },
//     { commentText: '2nd comment left', commentRating: 9, id: 2 },
//   ],
// }));
// const commentToSubmit = {};

const INITIAL_STATE = {
  commentText: '',
  commentRating: '-',
  ID: null,
  dishItem: {},
  isLoading: false,
};

export default class DishContainer extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const { id } = this.props;

    getMenuItemById(id).then(({ data }) =>
      this.setState({
        dishItem: data,
      }),
    );
  }

  // updateCommentList = () => {
  //   const { commentText, commentRating, dishItem } = this.state;
  //   if (commentText.length > 0 || commentRating > 0) {
  //     commentToSubmit.id = v4();
  //     commentToSubmit = { ...this.state };

  //     DishListRated.find(dish => dish.id === dishItem.id).comments.push(
  //       commentToSubmit,
  //     );
  //   }
  // };

  handleTextAreaChange = ({ target: { value } }) => {
    this.setState({
      commentText: value,
    });
  };

  handleRatingSelect = ({ target: { value } }) => {
    this.setState({
      commentRating: Math.round(value),
    });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    // this.updateCommentList();
    this.reset();
  };

  handleGoBack = () => {
    const { history, location } = this.props;

    const {
      dishItem: { category },
    } = this.state;
    return location.state
      ? history.push(location.state.from)
      : history.push({
          pathname: routes.MENU,
          search: `?category=${category}`,
        });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { dishItem, commentText, commentRating } = this.state;
    const ratingOption = ratingOptions.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ));

    // const { comments } = dishItem;
    // const commentItem = comments.map(item => (
    //   <li className={styles.comments__item} key={item.id}>
    //     <p className={styles.comment__text}>{item.commentText}</p>
    //     <p className={styles.comment__rating}>Rated: {item.commentRating}</p>
    //   </li>
    // ));
    return (
      <>
        <section className={styles.dish_page}>
          <div className={styles.container}>
            <DishItem currentDish={dishItem} />
            <button
              className={styles.goBackBtn}
              onClick={this.handleGoBack}
              type="button"
            >
              <img
                src="https://cdn3.iconfinder.com/data/icons/glyph/227/Button-Back-1-512.png"
                alt="goBack"
              />
            </button>
            <div className={styles.dish__user_feeddback}>
              Comments:
              {/* <ul className={styles.comments_list}> {commentItem} </ul> */}
              <form>
                <textarea
                  className={styles.comments__input_text}
                  onChange={this.handleTextAreaChange}
                  value={commentText}
                  placeholder="Leave Your comment..."
                />
                <label className={styles.comments__rating_label}>
                  Rate the dish
                  <select
                    className={styles.comments__rating_select}
                    name="rating"
                    onChange={this.handleRatingSelect}
                    value={commentRating}
                  >
                    {ratingOption}
                  </select>
                </label>
                <button
                  className={styles.button}
                  type="submit"
                  onClick={this.handleFormSubmit}
                >
                  Leave comment
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}

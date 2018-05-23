import React from 'react';
import 'font-awesome/css/font-awesome.css';
import PropTypes from 'prop-types';

// way-1 : class-syntax

// class Review extends Component {
//     renderStars(n) {
//         let stars = [];
//         for (let i = 0; i < n; i++) {
//             stars.push(<i style={{ color: 'red' }} class="fa fa-star" key={i}></i>)
//         }
//         return stars;
//     }
//     render() {
//         let { review } = this.props;
//         return (
//             <div className="row">
//                 <div className="col-8 col-sm-8 col-md-8">
//                     <div className="alert alert-info">
//                         {this.renderStars(review.stars)}
//                         &mdash;
//                         {review.author}
//                         <hr />
//                         <p>{review.body}</p>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

//export default Review;

//------------------------------------------------------------

// way-2 : function syntax ( prefer stateless-component)

function renderStars(n) {
    let stars = [];
    for (let i = 0; i < n; i++) {
        stars.push(<i style={{ color: 'red' }} className="fa fa-star" key={i}></i>)
    }
    return stars;
}

function Review(props) {
    let { review } = props;
    return (
        <div className="row">
            <div className="col-8 col-sm-8 col-md-8">
                <div className="alert alert-info">
                    {renderStars(review.stars)}
                    &mdash;
                    {review.author}
                    <hr />
                    <p>{review.body}</p>
                </div>
            </div>
        </div>
    );
}
Review.propTypes = {
    review: PropTypes.object.isRequired
};

export default Review
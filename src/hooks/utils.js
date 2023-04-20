import { memsCategory } from '../react-query/consts';

export const filterMems = (mems, category) => {
    const filteredList = mems.filter((mem) => {
        return (
            (category === memsCategory.HOT && mem.upvotes - mem.downvotes > 5) ||
            (category === memsCategory.REGULAR && mem.upvotes - mem.downvotes <= 5)
        );
    });

    return filteredList;
}



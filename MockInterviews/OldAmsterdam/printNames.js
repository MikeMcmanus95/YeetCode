/**
 * Requirements:
 * -   The function must accept a valid object format.
 * -   The function must remove invalid objects.
 * -   The function must output a valid byline HTML string.
 * -   A byline string must start with a "By".
 * -   Authors must be separated by a comma "," if there are more than 2.
 * -   The last Author must be separated by an "and".
 * -   The Author must be wrapped by the style specified in the "block" parameter.
 * -   Assume the we support the `<em>` and `<strong>` html tags.
 *
 *
 * The example input below should return:
 *   "By <strong>Jonah Engel Bromwich</strong>, <em>Matthew Schneier</em> and Niraj Chokshi"\
 *
  //TODO: test 0 authors
*/
const ex1 = {
    firstName: "teddy",
    middleName: "Roosevelt",
    lastName: "junior",
    block: {
      __typename: "Bold"
    }
  }
  const exampleBylines1 = {
    authors: [ex1]
  }
  
  
  const exampleBylines = {
    authors: [
      {
        firstName: "dave",
        middleName: "Khari",
        lastName: "chappelle",
        block: {
          __typename: "Bold"
        }
      },
  
  
      {
        random: "node",
        random: "node",
        random: "node",
        random: "node"
      },
  
  
      {
  
  
      },
  
  
      {
        firstName: "orpah",
        middleName: "",
        lastName: "wiNFrey",
        block: {
          __typename: "Italics"
        }
      },
  
  
      {
        firstName: "Robert",
        middleName: "",
        lastName: "Turner",
        block: {
  
  
        }
      },
  
  
  
  
      {
        firstName: "Annie",
        middleName: "",
        lastName: "<script>alert('Bananie');</script>",
        block: {
          __typename: "Italics"
        }
      }
    ]
  };
  
  
  function validateAuthor(author) {
    return typeof author === 'object'
      && typeof author.firstName === 'string'
      && typeof author.middleName === 'string'
      && typeof author.lastName === 'string'
      && typeof author.block === 'object';
  }
  
  
  function formatAuthor(author) {
    const STYLE_MAP = {
      'Bold': ['<strong>', '</strong>'],
      'Italics': ['<em>', '</em>'],
    };
    const name = (
      [
        author.firstName,
        author.middleName,
        author.lastName
      ]
    )
      .filter(x => x.length > 0)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join(' ');
    const [start, end] = STYLE_MAP[author.block.__typename] ?? ['', ''];
    return `${start}${name}${end}`;
  }
  
  
  function createByline(byline) {
    const {authors} = byline;
    const formattedAuthors = authors.filter(validateAuthor).map(formatAuthor);
    const length = formattedAuthors.length;
    if (length === 0) {
      return '';
    } else if (length < 3) {
      return `By ${formattedAuthors.join(' and ')}`;
    } else {
      const x = formattedAuthors.slice(0, length - 1);
      return `By ${x.join(', ')} and ${formattedAuthors[length - 1]}`;
    }
  }
  
  
  console.log(createByline(exampleBylines));
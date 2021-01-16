// import { INLINES } from "@contentful/rich-text-types";

// // renderNodeOptions
// export function renderNodeOptions() {
//     const options = {
//         renderNode: {
//             // handle data from rte - hyperlink
//             [INLINES.ENTRY_HYPERLINK]: (node: any) => {
//                 // get parent relation, to get full url path
//                 const getRelation =
//                     node.data.target.fields &&
//                     node.data.target.fields.addRelationToParent
//                         ? node.data.target.fields.addRelationToParent + "/"
//                         : "";
//                 // get slug
//                 const getSlug = node.data.target.fields
//                     ? node.data.target.fields.slug
//                           .toLowerCase()
//                           .trim()
//                           .replace(" ", "-") + "/"
//                     : "";
//                 return `<a href='/${getRelation + getSlug}'>${
//                     node.content[0].value
//                 }</a>`;
//             },
            
//         }
//     };
//     return options;
// }
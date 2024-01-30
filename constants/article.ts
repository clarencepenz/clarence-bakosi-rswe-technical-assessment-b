import PREVIEW_IMAGE from "@/utils/image";

// data for a single article
export const articleData = {
  coverImage: PREVIEW_IMAGE("main_cover_image"),
  title: "Biden sets electric vehicle target in drive to cut emissions",
  alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  description: `<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat faucibus id vitae suspendisse. Ipsum erat malesuada sit faucibus faucibus massa. Mauris et morbi vitae habitant sit. Maecenas pretium in consectetur velit auctor. Porttitor tellus ut pretium, scelerisque orci erat. Etiam imperdiet ridiculus eu tincidunt. Vel dui, pulvinar vivamus lorem risus.
    </p>
    <br/>

    <p>Bibendum aliquet adipiscing sed interdum. Arcu consequat fames blandit nisi. Vulputate dignissim tempus duis ultrices. Arcu sed porttitor morbi lobortis mattis pellentesque. Dui quam sed eu ultrices ut nullam. Maecenas tortor auctor eros erat volutpat sapien dui pretium.
    </p>

    <br/>
    <p>Hac sed diam tristique in consequat in suspendisse habitant. Et mauris venenatis posuere auctor tortor, placerat. Quisque tincidunt euismod dictum neque, massa nisi. Sagittis, dictum nibh bibendum cursus neque, nunc molestie. Odio viverra sagittis, platea nibh eget. Egestas a cras bibendum amet, mi magna cursus. Ante suscipit felis vitae amet.</p>

    `,
  tag: "news",
  created_at: "September 21, 2021",
};

// data for multiple articles
export const articlesData = [
  {
    id: 1,
    coverImage: PREVIEW_IMAGE("image_one"),
    title:
      "The US President wants half of all new vehicles to be zero emissions by 2030",
    title_trunc: "The US President wants half of all new vehicles...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam...",
    tag: "featured",
    is_featured: true,
  },
  {
    id: 2,
    coverImage: PREVIEW_IMAGE("image_two"),
    title:
      "The US President wants half of all new vehicles to be zero emissions by 2030",
    title_trunc: "The US President wants half of all new vehicles...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam...",
    tag: "news",
    is_featured: false,
  },
  {
    id: 3,
    coverImage: PREVIEW_IMAGE("image_three"),
    title:
      "The US President wants half of all new vehicles to be zero emissions by 2030",
    title_trunc: "The US President wants half of all new vehicles...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam...",
    tag: "news",
    is_featured: false,
  },
];

<template>
  <div>
    <bookable-list-item
      item-title="Cheap Villa"
      item-content="A very cheap villa"
      :price="1000"
    >
    </bookable-list-item>
    <bookable-list-item
      item-title="Cheap Villa 2"
      item-content="A very cheap villa"
      :price="1500"
    >
    </bookable-list-item>
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";

export default {
  components: {
    BookableListItem,
  },
  mounted() {
    console.log(this.itemTitle);
    //uncomment because to see why modifying prop is a bad idea
    // this.itemTitle = "New Title";
  },
  //   beforeCreate() {
  //     console.log("Before create");
  //   },
  created() {
    console.log("created");
  },
  //   beforeMount() {
  //     console.log("Before mount");
  //   },
  mounted() {
    console.log("mounted");
  },
  //   beforeDestroy() {
  //     console.log("Before destroy");
  //   },
  //   destroyed() {
  //     console.log("destroyed");
  //   },
};
</script>

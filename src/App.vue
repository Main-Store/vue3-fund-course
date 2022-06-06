<template>
  <div class="app">
    <form>
      <h4>Создание поста</h4>
      <input
        v-bind:value="title"
        @input="title = $event.target.value;"
        class="input"
        type="text"
        placeholder="Название">
      <input
        v-bind:value="body"
        @input="body = $event.target.value;"
        class="input"
        type="text"
        placeholder="Описание">
      <button
        class="btn"
        @click="createPost"
        >Создать
      </button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: 1, title: 'Javascript', body: 'Описание поста'},
        {id: 2, title: 'Javascript 2', body: 'Описание поста 2'},
        {id: 3, title: 'Javascript 3', body: 'Описание поста 3'},
        {id: 4, title: 'Javascript 4', body: 'Описание поста 4'},
      ],
      title: '',
      body: ''
    }
  },
  methods: {
    createPost() {

    },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.post {
  padding: 15px;
  border: 2px solid #008026;
  border-radius: 4px;
  margin-top: 15px;
}

form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 2px solid #008026;
  border-radius: 4px;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  border: 1px solid #008026;
  border-radius: 4px;
}

</style>

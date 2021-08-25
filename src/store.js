const STORAGE_KEY = 'vue_todolist';
export default {
    fetch: function() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    },
    save: function(items) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
}
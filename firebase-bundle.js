// firebase-bundle.js — minimal stub for local file:// testing
// This prevents 404 errors. Real Firebase sync is disabled; app falls back to localStorage.

(function() {
  // Minimal Firebase App mock
  window.FirebaseApp = {
    initializeApp: function(config) {
      console.log('[Firebase stub] initializeApp called (local mode)');
      return { name: '[DEFAULT]', options: config };
    }
  };

  // Minimal Firestore mock — all operations are no-ops
  window.FirebaseFirestore = {
    getFirestore: function(app) {
      return { _stub: true };
    },
    doc: function(db, path) {
      return { _path: path };
    },
    getDoc: async function(docRef) {
      return {
        exists: () => false,
        data: () => null
      };
    },
    setDoc: async function(docRef, data) {
      // no-op
      return Promise.resolve();
    },
    onSnapshot: function(docRef, callback) {
      // Return an unsubscribe function that does nothing
      return function unsubscribe() {};
    }
  };

  console.log('%c[Spud OS] Using local firebase-bundle.js stub (no real sync)', 'color:#9C99A8');
})();

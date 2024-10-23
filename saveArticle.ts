// import { db } from './firebaseConfig';
// import { collection, addDoc } from 'firebase/firestore';

// // 記事をFirestoreに保存する関数
// export const saveArticleToFirebase = async (article: any) => {
//   try {
//     const docRef = await addDoc(collection(db, 'articles'), article);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };

// // サンプルデータ
// const articleData = {
//   id: "1",
//   title: "未来の技術",
//   thumbnail: { url: "https://example.com/image.jpg" },
//   tags: ["Technology", "Future", "AI"],
//   publishedAt: new Date().toISOString(),
//   article_name: "AIの未来",
//   article_summary: "AIが未来に与える影響について...",
//   article_link: "https://example.com/articles/1",
//   content: "この記事は未来のAIについて解説しています..."
// };

// // 保存処理の実行
// saveArticleToFirebase(articleData);

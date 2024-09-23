import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

// Sample data for the notifications
const notifications = [
  {
    id: "1",
    title: "Bước 1 Xác định nhu cầu khách hàng",
    description: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
    date: "20/08/2020, 06:00",
    icon: "✅",
    read: false,
  },
  {
    id: "2",
    title: "Bạn có khách hàng mới!",
    description:
      "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
    date: "20/08/2020, 06:00",
    icon: "👥",
    read: false,
  },
  {
    id: "3",
    title: "Khách hàng được chia sẻ bị trùng",
    description:
      "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.",
    date: "20/08/2020, 06:00",
    icon: "👥",
    read: true,
  },
  {
    id: "4",
    title: "Khách hàng được thêm bị trùng",
    description:
      "Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.",
    date: "20/08/2020, 06:00",
    icon: "👥",
    read: false,
  },
  {
    id: "5",
    title: "Công việc sắp đến hạn trong hôm nay",
    description: "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
    date: "20/08/2020, 06:00",
    icon: "✅",
    read: true,
  },
  {
    id: "6",
    title: "Công việc đã quá hạn",
    description:
      "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.",
    date: "20/08/2020, 06:00",
    icon: "✅",
    read: true,
  },
];

const NotificationItem = ({ item }) => (
  <View
    style={[styles.notificationContainer, !item.read && styles.unreadOverlay]}
  >
    <View style={styles.iconContainer}>
      <Text style={styles.icon}>{item.icon}</Text>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  </View>
);

const Separator = () => <View style={styles.separator} />; // Separator component for line

const App = () => {
  return (
    <View style={styles.container}>
      {/* Khoảng trống để dịch nội dung xuống dưới */}
      <View style={styles.spacer} />

      {/* Tiêu đề "Thông báo" */}
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator} // Add separator between items
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  spacer: {
    height: 50, // Điều chỉnh giá trị này để thêm khoảng cách phía trên
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    color: "#6a0dad", // Màu tím cho tiêu đề
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  notificationContainer: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  unreadOverlay: {
    backgroundColor: "#e6e0f8", // Màu tím nhạt cho thông báo chưa đọc
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    marginLeft: 16, // Thêm khoảng cách bên trái cho icon
  },
  textContainer: {
    flex: 1,
    marginLeft: 8, // Thêm khoảng cách bên trái cho nội dung
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 12,
    color: "#666",
  },
  date: {
    fontSize: 11,
    color: "#999",
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd", // Màu cho đường line phân cách
    marginHorizontal: 0, // Full ra cả hai bên
  },
});

export default App;

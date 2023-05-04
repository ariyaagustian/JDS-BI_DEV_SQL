# berikut adalah syntax untuk menjawab soal https://www.testdome.com/questions/python/merge-names/24231?visibility=1&skillId=9

# Penjelasan :
# Terapkan metode unique_names. Ketika melewati dua array nama, itu akan mengembalikan sebuah array berisi nama-nama yang muncul di salah satu atau kedua larik. Array yang dikembalikan seharusnya tidak duplikat.

def unique_names(names1, names2):
    # Gabungkan dua larik dan ubah menjadi satu set untuk menghapus duplikat
    unique_names = set(names1 + names2)
    # Ubah set kembali ke daftar dan kembali
    return list(unique_names)

names1 = ["Ava", "Emma", "Olivia"]
names2 = ["Olivia", "Sophia", "Emma"]
print(unique_names(names1, names2)) # should print Ava, Emma, Olivia, Sophia
